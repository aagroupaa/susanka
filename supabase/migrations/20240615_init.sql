-- Create posts table
create table posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  created_at timestamp with time zone default now()
);

-- Create comments table
create table comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references posts(id) on delete cascade,
  text text not null,
  created_at timestamp with time zone default now()
);
