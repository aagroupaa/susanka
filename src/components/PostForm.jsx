import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function PostForm({ onPost, session }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isGuest = !session;

  const hasGuestPostedToday = () => {
    const lastPostDate = localStorage.getItem('guest_post_date');
    const today = new Date().toISOString().split('T')[0];
    return lastPostDate === today;
  };

  const submitPost = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Title and content required');
      return;
    }

    if (isGuest && hasGuestPostedToday()) {
      alert('Guests can only post once per day.');
      return;
    }

    const { data, error } = await supabase.from('posts').insert([{
      title,
      content,
      user_id: session?.user?.id || null
    }]);

    if (error) {
      alert('Error creating post: ' + error.message);
      return;
    }

    if (isGuest) {
      localStorage.setItem('guest_post_date', new Date().toISOString().split('T')[0]);
    }

    setTitle('');
    setContent('');
    onPost?.(); // trigger parent refresh
  };

  return (
    <form onSubmit={submitPost}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Post</button>
    </form>
  );
}
