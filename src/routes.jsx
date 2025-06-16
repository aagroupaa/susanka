import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function Router() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return setChecked(true);
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).single();
      setIsAdmin(data?.role === 'admin');
      setChecked(true);
    });
  }, []);

  if (!checked) return <div className="p-4">Checking admin access...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
