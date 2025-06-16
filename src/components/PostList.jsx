import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, content, created_at, user_id, profiles: user_id (email), comments (id)')
      .order('created_at', { ascending: false });
    if (!error) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-4 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded border">
          <Link to={`/posts/${post.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
            {post.title}
          </Link>
          <p className="text-sm text-gray-600 mt-1">by {post.profiles?.email}</p>
          <p className="text-gray-800 mt-2 line-clamp-3">{post.content}</p>
          <p className="text-xs text-gray-500 mt-2">{post.comments?.length || 0} comment(s)</p>
        </div>
      ))}
    </div>
  );
}
