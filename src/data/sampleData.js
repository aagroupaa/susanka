// Sample data for Susanka Forum - Cameroon focused content

export const samplePosts = [
  {
    id: 1,
    author: {
      name: "Amina Mbeki",
      username: "@amina_m",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "Douala, Cameroon",
      isVerified: true
    },
    content: "Just launched our fintech startup in Douala! We're building digital payment solutions for small businesses across Cameroon. Looking for partners and investors who understand the CEMAC market. #CameroonTech #Fintech #StartupLife",
    category: "Professional",
    timestamp: "2 hours ago",
    likes: 45,
    comments: 12,
    shares: 8,
    isLiked: false
  },
  {
    id: 2,
    author: {
      name: "Jean-Paul Kouam",
      username: "@jpkouam",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Yaoundé, Cameroon",
      isVerified: false
    },
    content: "Attending the Africa Tech Summit next month in Kigali. Any fellow Cameroonian developers planning to be there? Would love to connect and maybe organize a CEMAC tech meetup. The future of African technology is bright! 🌍",
    category: "Learning",
    timestamp: "4 hours ago",
    likes: 23,
    comments: 7,
    shares: 5,
    isLiked: true
  },
  {
    id: 3,
    author: {
      name: "Marie Ngozi",
      username: "@marie_ngozi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Buea, Cameroon",
      isVerified: true
    },
    content: "Silicon Mountain continues to grow! Our co-working space in Buea just welcomed 15 new startups this quarter. It's amazing to see how the tech ecosystem in Southwest Cameroon is evolving. Proud of our local innovation! 🚀",
    category: "Technology",
    timestamp: "6 hours ago",
    likes: 67,
    comments: 18,
    shares: 12,
    isLiked: false
  },
  {
    id: 4,
    author: {
      name: "Ibrahim Saidou",
      username: "@ibrahim_s",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Garoua, Cameroon",
      isVerified: false
    },
    content: "Working on a project to improve agricultural productivity in Northern Cameroon using IoT sensors and mobile technology. If you're passionate about AgriTech and sustainable development, let's collaborate! #AgriTech #Innovation #Cameroon",
    category: "Jobs",
    timestamp: "8 hours ago",
    likes: 34,
    comments: 9,
    shares: 6,
    isLiked: true
  }
];

export const onlineUsers = [
  {
    id: 1,
    name: "Aisha Bello",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    status: "online"
  },
  {
    id: 2,
    name: "Claude Mbida",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    status: "away"
  },
  {
    id: 3,
    name: "Fatou Kone",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    status: "online"
  },
  {
    id: 4,
    name: "Samuel Nkomo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    status: "online"
  },
  {
    id: 5,
    name: "Grace Asong",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    status: "away"
  }
];

export const recentActivities = [
  {
    id: 1,
    user: {
      name: "Amina Mbeki",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    action: "liked your post about fintech in CEMAC",
    timestamp: "5 min ago",
    type: "like"
  },
  {
    id: 2,
    user: {
      name: "Jean-Paul Kouam",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    action: "commented on your startup pitch",
    timestamp: "12 min ago",
    type: "comment"
  },
  {
    id: 3,
    user: {
      name: "Marie Ngozi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    action: "started following you",
    timestamp: "1 hour ago",
    type: "follow"
  },
  {
    id: 4,
    user: {
      name: "Samuel Nkomo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    action: "shared your post about AgriTech",
    timestamp: "2 hours ago",
    type: "share"
  }
];

export const communities = [
  {
    id: 1,
    name: "Cameroon Tech",
    members: 2840,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "CEMAC Entrepreneurs",
    members: 1560,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Silicon Mountain",
    members: 890,
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Douala Business Hub",
    members: 1240,
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "African Innovators",
    members: 3200,
    color: "bg-red-500"
  }
];
