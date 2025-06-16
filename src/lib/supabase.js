import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pdrfzwonbmuexrxqyusc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkcmZ6d29uYm11ZXhyeHF5dXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDQxNzUsImV4cCI6MjA2NTUyMDE3NX0.zZ6-rN-o8UrqGPzeTRyT35HlQmG8pFvsXAu664FYxVo'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database Schema for Susanka Forum
/*
-- Users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  display_name VARCHAR(100),
  email VARCHAR(255) UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  location VARCHAR(100),
  profession VARCHAR(100),
  company VARCHAR(100),
  website_url TEXT,
  linkedin_url TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  color VARCHAR(7),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Posts table
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),
  content TEXT NOT NULL,
  media_urls TEXT[],
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  share_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Comments table
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id),
  content TEXT NOT NULL,
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Likes table
CREATE TABLE likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, post_id),
  UNIQUE(user_id, comment_id)
);

-- Follows table
CREATE TABLE follows (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(follower_id, following_id)
);

-- Communities table
CREATE TABLE communities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  avatar_url TEXT,
  cover_url TEXT,
  member_count INTEGER DEFAULT 0,
  is_private BOOLEAN DEFAULT FALSE,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Community members table
CREATE TABLE community_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  community_id UUID REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(20) DEFAULT 'member',
  joined_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(community_id, user_id)
);

-- Insert sample categories
INSERT INTO categories (name, description, color) VALUES
('Professional', 'Career development and professional networking', '#3B82F6'),
('Technology', 'Tech discussions, programming, and innovation', '#10B981'),
('Learning', 'Education, courses, and skill development', '#8B5CF6'),
('Jobs', 'Job opportunities and career postings', '#F59E0B'),
('Lifestyle', 'Personal interests and lifestyle discussions', '#EF4444');

-- Insert sample communities
INSERT INTO communities (name, description, member_count) VALUES
('Cameroon Tech', 'Technology professionals and enthusiasts from Cameroon', 2840),
('CEMAC Entrepreneurs', 'Business leaders and entrepreneurs in the CEMAC region', 1560),
('Silicon Mountain', 'Tech ecosystem in Buea and Southwest Cameroon', 890),
('Douala Business Hub', 'Business networking in Cameroon''s economic capital', 1240),
('African Innovators', 'Pan-African innovation and startup community', 3200);

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

-- Users can read all profiles but only update their own
CREATE POLICY "Users can view all profiles" ON users FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- Posts are public but only authors can update/delete
CREATE POLICY "Posts are viewable by everyone" ON posts FOR SELECT USING (true);
CREATE POLICY "Users can insert own posts" ON posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own posts" ON posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own posts" ON posts FOR DELETE USING (auth.uid() = user_id);

-- Comments are public but only authors can update/delete
CREATE POLICY "Comments are viewable by everyone" ON comments FOR SELECT USING (true);
CREATE POLICY "Users can insert own comments" ON comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comments" ON comments FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON comments FOR DELETE USING (auth.uid() = user_id);

-- Likes are manageable by the user who created them
CREATE POLICY "Users can manage own likes" ON likes FOR ALL USING (auth.uid() = user_id);

-- Follows are manageable by the follower
CREATE POLICY "Users can manage own follows" ON follows FOR ALL USING (auth.uid() = follower_id);
*/
