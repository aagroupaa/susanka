import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, CheckCircle } from 'lucide-react';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Professional: 'bg-blue-100 text-blue-800',
      Technology: 'bg-green-100 text-green-800',
      Learning: 'bg-purple-100 text-purple-800',
      Jobs: 'bg-orange-100 text-orange-800',
      Lifestyle: 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card p-6 mb-4">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              {post.author.isVerified && (
                <CheckCircle className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{post.author.username}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{post.author.location}</span>
              </div>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <span className={`px-3 py-1 rounded-full text-xs font-medium $\{getCategoryColor(post.category)}`}>
          {post.category}
        </span>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors $\{
              isLiked
                ? 'text-red-600 bg-red-50 hover:bg-red-100'
                : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <Heart className={`w-4 h-4 $\{isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likes}</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>

        <div className="text-xs text-gray-500">
          {(likes + post.comments + post.shares).toLocaleString()} engagements
        </div>
      </div>
    </div>
  );
};

export default PostCard;
