import React from 'react';
import { MessageCircle } from 'lucide-react';
import { onlineUsers } from '../data/sampleData';

const OnlineUsers = () => {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Online Users</h3>
        <span className="text-sm text-gray-500">{onlineUsers.length} active</span>
      </div>

      <div className="space-y-3">
        {onlineUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white $\{
                  user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.status}</p>
              </div>
            </div>
            <button className="p-1 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors">
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium">
        View all
      </button>
    </div>
  );
};

export default OnlineUsers;
