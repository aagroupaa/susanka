import React, { useState } from 'react';
import { Camera, Smile, Calendar, MapPin } from 'lucide-react';

const CreatePost = ({ onCreatePost }) => {
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Professional');

  const categories = ['Professional', 'Technology', 'Learning', 'Jobs', 'Lifestyle'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newPost = {
        id: Date.now(),
        author: {
          name: "Amina Mbeki",
          username: "@amina_m",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          location: "Douala, Cameroon",
          isVerified: true
        },
        content: content.trim(),
        category: selectedCategory,
        timestamp: "now",
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false
      };

      onCreatePost(newPost);
      setContent('');
    }
  };

  return (
    <div className="card p-6 mb-6">
      <form onSubmit={handleSubmit}>
        {/* User Info */}
        <div className="flex items-start space-x-3 mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            alt="Your avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-gray-900">Amina Mbeki</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>Douala, Cameroon</span>
              </div>
            </div>

            {/* Category Selector */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mb-3 px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Content Input */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening in your professional world?"
              className="textarea min-h-[100px] resize-none"
              rows={3}
            />
          </div>
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Camera className="w-4 h-4" />
              <span className="text-sm">Photo</span>
            </button>

            <button
              type="button"
              className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Smile className="w-4 h-4" />
              <span className="text-sm">Emoji</span>
            </button>

            <button
              type="button"
              className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Event</span>
            </button>
          </div>

          <button
            type="submit"
            disabled={!content.trim()}
            className={`px-6 py-2 rounded-lg font-medium transition-colors $\{
              content.trim()
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
