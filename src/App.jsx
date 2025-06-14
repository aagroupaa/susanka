import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostCard from './components/PostCard';
import CreatePost from './components/CreatePost';
import OnlineUsers from './components/OnlineUsers';
import RecentActivity from './components/RecentActivity';
import { samplePosts } from './data/sampleData';

function App() {
  const [posts, setPosts] = useState(samplePosts);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 px-6 py-6">
          <div className="max-w-2xl">
            <CreatePost onCreatePost={handleCreatePost} />

            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 px-6 py-6 space-y-6">
          <OnlineUsers />
          <RecentActivity />

          {/* Trending Topics */}
          <div className="card p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Trending in Cameroon</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-900">#CameroonTech</span>
                <span className="text-xs text-gray-500">2.4k posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-900">#SiliconMountain</span>
                <span className="text-xs text-gray-500">1.8k posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-900">#CEMAC</span>
                <span className="text-xs text-gray-500">950 posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-900">#AfricanInnovation</span>
                <span className="text-xs text-gray-500">720 posts</span>
              </div>
            </div>
          </div>

          {/* Suggested Connections */}
          <div className="card p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Suggested Connections</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Dr. Kwame Asante"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dr. Kwame Asante</p>
                    <p className="text-xs text-gray-500">Tech Entrepreneur</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Connect
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
                    alt="Sarah Okonkwo"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sarah Okonkwo</p>
                    <p className="text-xs text-gray-500">FinTech Specialist</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
