import React from 'react';
import { Home, Users, GraduationCap, Briefcase, TrendingUp, Settings, Crown } from 'lucide-react';
import { communities } from '../data/sampleData';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'Communities', active: false },
    { icon: GraduationCap, label: 'Learning', active: false },
    { icon: Briefcase, label: 'Jobs', active: false },
    { icon: TrendingUp, label: 'Trending', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto hide-scrollbar">
      <div className="p-6">
        {/* Premium Upgrade Card */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-4 mb-6 text-white">
          <div className="flex items-center mb-3">
            <Crown className="w-5 h-5 mr-2" />
            <span className="font-semibold">Go Premium</span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Unlock exclusive features and connect with top professionals across Africa & Asia
          </p>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Upgrade Now
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors $\{
                  item.active
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Communities */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Communities
          </h3>
          <div className="space-y-2">
            {communities.slice(0, 5).map((community) => (
              <a
                key={community.id}
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-3 h-3 rounded-full $\{community.color}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {community.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {community.members.toLocaleString()} members
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-gray-900">1.2k</p>
              <p className="text-xs text-gray-500">Connections</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">48</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
