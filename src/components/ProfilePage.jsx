import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ProfilePage({ session }) {
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    if (data) {
      setProfile(data);
      setBio(data.bio || '');
      setLocation(data.location || '');
    }
    setLoading(false);
  };

  const saveProfile = async () => {
    await supabase.from('profiles').update({ bio, location }).eq('id', session.user.id);
    fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <div className="p-4">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">My Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            className="w-full p-2 border rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          onClick={saveProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
