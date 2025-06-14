# Susanka Forum

A modern, professional community platform focused on connecting African & Asian professionals, with special emphasis on the Cameroon tech ecosystem.

## 🌟 Features

- **Professional Networking**: Connect with tech professionals across Africa & Asia
- **Community Discussions**: Engage in meaningful conversations about technology, careers, and innovation
- **Real-time Interactions**: Like, comment, and share posts with instant feedback
- **Premium Features**: Advanced networking capabilities for premium members
- **Mobile Responsive**: Seamless experience across all devices
- **Cameroon Focus**: Special attention to the Silicon Mountain ecosystem and CEMAC region

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd susanka-forum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your Supabase credentials.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
susanka-forum/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Top navigation
│   │   ├── Sidebar.jsx    # Left navigation
│   │   ├── PostCard.jsx   # Individual post display
│   │   ├── CreatePost.jsx # Post creation form
│   │   ├── OnlineUsers.jsx # Active users sidebar
│   │   └── RecentActivity.jsx # Activity feed
│   ├── data/
│   │   └── sampleData.js  # Sample content and users
│   ├── lib/
│   │   └── supabase.js    # Database configuration
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite build configuration
└── README.md             # Project documentation
```

## 🎨 Design System

### Colors

- **Primary Purple**: Used for branding and primary actions
  - `purple-600` (#9333EA) - Primary buttons and links
  - `purple-50` (#FAF5FF) - Light backgrounds
  - `purple-100` (#F3E8FF) - Hover states

- **Semantic Colors**:
  - Success: `green-500` (#10B981)
  - Warning: `yellow-500` (#F59E0B)
  - Error: `red-500` (#EF4444)
  - Info: `blue-500` (#3B82F6)

### Components

- **Cards**: White background with subtle shadows and rounded corners
- **Buttons**: Purple primary, gray secondary with hover states
- **Forms**: Clean inputs with purple focus rings
- **Typography**: Inter font family for modern, readable text

### Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🗄️ Database Schema

The application uses Supabase (PostgreSQL) with the following main tables:

- **users**: User profiles and authentication
- **posts**: Forum posts and discussions
- **comments**: Post comments and replies
- **likes**: Post and comment likes
- **follows**: User following relationships
- **communities**: Discussion groups
- **categories**: Post categorization

See `src/lib/supabase.js` for the complete schema definition.

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a new Supabase project
2. Run the SQL commands in `src/lib/supabase.js` to set up tables
3. Configure Row Level Security (RLS) policies
4. Add your project URL and anon key to environment variables

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Other Platforms

The app can be deployed to any static hosting service that supports Node.js builds.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌍 About Susanka

Susanka is dedicated to fostering professional connections and knowledge sharing across African and Asian tech communities. We believe in the power of collaboration and innovation to drive economic growth and technological advancement in these dynamic regions.

**Special Focus Areas:**
- Silicon Mountain (Buea, Cameroon)
- CEMAC Economic Region
- African Tech Ecosystems
- Asian Innovation Hubs
- Cross-continental Partnerships

For more information, visit [susanka.com](https://susanka.com) or contact us at hello@susanka.com.
