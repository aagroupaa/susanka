import { useEffect, useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ForumLayout({ session }) {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, avatar_url')
        .eq('status', 'online')
        .limit(5);
      if (!error) setOnlineUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const markOnline = async () => {
      await supabase.from('profiles').update({ status: 'online' }).eq('id', session.user.id);
    };
    const markOffline = async () => {
      await supabase.from('profiles').update({ status: 'offline' }).eq('id', session.user.id);
    };
    markOnline();
    window.addEventListener('beforeunload', markOffline);
    return () => window.removeEventListener('beforeunload', markOffline);
  }, [session]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r p-4 space-y-4">
        <h2 className="text-xl font-bold">Susanka</h2>
        <nav className="space-y-2 text-sm">
          <Link to="/" className="block hover:text-blue-600">🏠 Home</Link>
          <Link to="/profile" className="block hover:text-blue-600">🙋 My Profile</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 space-y-6 max-w-3xl">
        <PostForm session={session} />
        <PostList />
      </main>
      <aside className="w-64 bg-white border-l p-4 space-y-4">
        <section>
          <h3 className="font-semibold mb-2">Online Users</h3>
          <ul className="space-y-2 text-sm">
            {onlineUsers.map(user => (
              <li key={user.id} className="flex items-center space-x-2">
                <img
                  src={user.avatar_url || 'https://api.dicebear.com/7.x/identicon/svg?seed=' + user.email}
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span>{user.email} <span className="text-green-500">●</span></span>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
