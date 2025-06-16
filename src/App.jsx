import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import AuthForm from './components/AuthForm';
import { supabase } from './lib/supabase';

function App() {
  const [refresh, setRefresh] = useState(0);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => listener?.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main className="flex-grow p-4 bg-accent space-y-6">
        <div className="text-right space-x-4">
          {session && (
            <button onClick={logout} className="text-sm underline text-blue-600">
              Logout
            </button>
          )}
        </div>

        {/* ✅ Forum is visible to everyone */}
        <PostList refreshFlag={refresh} session={session} />

        {/* 📝 Guests can post 1/day. Users unlimited */}
        <PostForm onPost={() => setRefresh(prev => prev + 1)} session={session} />

        {/* 🔐 Only show auth form if logged out */}
        {!session && (
          <div className="mt-6">
            <AuthForm onAuth={() => window.location.reload()} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
