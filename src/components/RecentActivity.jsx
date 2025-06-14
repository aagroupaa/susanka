import React from 'react';
import { Activity, Heart, MessageCircle, UserPlus, Share2 } from 'lucide-react';
import { recentActivities } from '../data/sampleData';

const RecentActivity = () => {
  const getActivityIcon = (type) => {
    const icons = {
      like: Heart,
      comment: MessageCircle,
      follow: UserPlus,
      share: Share2,
    };
    return icons[type] || Activity;
  };

  const getActivityColor = (type) => {
    const colors = {
      like: 'text-red-500',
      comment: 'text-blue-500',
      follow: 'text-green-500',
      share: 'text-purple-500',
    };
    return colors[type] || 'text-gray-500';
  };

  return (
    <div className="card p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="w-5 h-5 text-gray-600" />
        <h3 className="font-semibold text-gray-900">Recent Activity</h3>
      </div>

      <div className="space-y-3">
        {recentActivities.map((activity) => {
          const IconComponent = getActivityIcon(activity.type);
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <img
                src={activity.user.avatar}
                alt={activity.user.name}
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user.name}</span>{' '}
                    {activity.action}
                  </p>
                  <IconComponent className={`w-3 h-3 $\{getActivityColor(activity.type)}`} />
                </div>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium">
        View all activity
      </button>
    </div>
  );
};

export default RecentActivity;
