
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './lib/supabase';
import ForumLayout from '../components/ForumLayout';
import ProfilePage from '../components/ProfilePage';
import AuthForm from '../components/AuthForm';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => listener?.subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm">
          <AuthForm onAuth={() => window.location.reload()} />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ForumLayout session={session} />} />
        <Route path="/profile" element={<ProfilePage session={session} />} />
      </Routes>
    </Router>
  );
}
