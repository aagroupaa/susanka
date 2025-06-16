import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Header() {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const loadSessionAndRole = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      const userId = session?.user?.id;
      if (userId) {
        const { data } = await supabase.from('profiles').select('role').eq('id', userId).single();
        setRole(data?.role || 'user');
      }
    };

    loadSessionAndRole();

    const { data: listener } = supabase.auth.onAuthStateChange(() => loadSessionAndRole());
    return () => listener?.subscription.unsubscribe();
  }, []);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">Susanka Forum</h1>
      <nav className="space-x-4 text-sm">
        <a href="/" className="text-gray-700 hover:underline">Home</a>
        {session && role === 'admin' && (
          <a href="/admin" className="text-blue-600 underline">Admin</a>
        )}
      </nav>
    </header>
  );
}
