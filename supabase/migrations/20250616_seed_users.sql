-- ✅ SUPABASE-SAFE VERSION FOR TESTING USER SEEDING
-- Assumes auth.users already exists and is managed by Supabase

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  role text default 'user',
  created_at timestamp default now()
);

alter table public.profiles
  add column if not exists role text default 'user';

create or replace function public.handle_new_user()
returns trigger
language plpgsql
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger where tgname = 'on_auth_user_created'
  ) then
    create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();
  end if;
end;
$$;

create or replace function public.seed_fake_users(n int)
returns void as $$
declare
  i int := 0;
  new_id uuid;
  fake_email text;
  suffix text;
begin
  for i in 1..n loop
    new_id := gen_random_uuid();
    suffix := substring(md5(random()::text), 1, 6);
    fake_email := 'user' || lpad(i::text, 3, '0') || '_' || suffix || '@example.com';

    begin
      insert into auth.users (id, email)
      values (new_id, fake_email);
    exception when unique_violation then
      continue;
    end;

    update public.profiles
    set role = (array['user', 'admin', 'mod'])[floor(random() * 3 + 1)]
    where id = new_id;
  end loop;
end;
$$ language plpgsql;

select public.seed_fake_users(10);

update public.profiles
set role = 'admin'
where email = 'aagroup420@gmail.com';

alter table if exists public.posts
  add column if not exists user_id uuid;

alter table if exists public.comments
  add column if not exists user_id uuid;

select * from public.profiles order by created_at desc;
