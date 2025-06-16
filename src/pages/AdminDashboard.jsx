import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [sessionUser, setSessionUser] = useState(null);

  const loadUsers = async () => {
    let query = supabase.from('profiles').select(`
      *,
      posts(count),
      comments(count)
    `);

    if (filterRole) query = query.eq('role', filterRole);
    const { data, error } = await query;

    if (!error) setUsers(data);
  };

  const updateRole = async (id, role) => {
    await supabase.from('profiles').update({ role }).eq('id', id);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setSessionUser(user));
    loadUsers();

    const channel = supabase
      .channel('user-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        () => loadUsers()
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [filterRole]);

  const filtered = users.filter((u) =>
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <input
          type="text"
          className="border p-2 rounded w-full sm:w-1/2"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="">All roles</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="suspended">Suspended</option>
          <option value="banned">Banned</option>
        </select>
      </div>

      <table className="w-full table-auto border mt-4 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Posts</th>
            <th className="border p-2">Comments</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.email}</td>
              <td className="p-2 capitalize">{u.role || 'user'}</td>
              <td className="p-2 text-center">{u.posts?.length ?? 0}</td>
              <td className="p-2 text-center">{u.comments?.length ?? 0}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => updateRole(u.id, 'admin')} className="text-blue-600">Promote</button>
                <button onClick={() => updateRole(u.id, 'suspended')} className="text-yellow-600">Suspend</button>
                <button onClick={() => updateRole(u.id, 'banned')} className="text-red-600">Ban</button>
                <button onClick={() => updateRole(u.id, 'user')} className="text-gray-600">Undo</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
