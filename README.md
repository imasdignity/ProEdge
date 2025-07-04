# ProEdge Football Training

A comprehensive online football training platform offering position-specific training programs with 4-day home schedules, physical conditioning, stamina training, and technical skill development.

## 🚀 Features

- **Position-Specific Training**: Specialized programs for Defenders, Goalkeepers, Midfielders, and Strikers
- **4-Day Home Programs**: Structured weekly training schedules designed for home practice
- **Progressive Skill Levels**: Beginner → Intermediate → Advanced → Pro
- **Complete Training System**: Physical training, stamina building, technical skills, and position mastery
- **Legendary Skills Training**: Learn from football legends like Messi, Ronaldo, De Bruyne, Van Dijk, and Neuer
- **User Authentication**: Secure signup/signin with Supabase
- **Progress Tracking**: Monitor improvement across all training components
- **Responsive Design**: Beautiful, modern interface that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuthModal.tsx   # Authentication modal
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation bar
├── hooks/              # Custom React hooks
│   ├── useAuth.ts      # Authentication hook
│   ├── useProfile.ts   # User profile management
│   └── useTrainingPrograms.ts # Training programs data
├── lib/                # Utility libraries
│   └── supabase.ts     # Supabase client and types
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Home.tsx        # Homepage
│   ├── HowItWorks.tsx  # How it works page
│   ├── LegendarySkills.tsx # Legendary skills training
│   ├── Pricing.tsx     # Pricing plans
│   ├── Programs.tsx    # Training programs
│   └── Testimonials.tsx # Success stories
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd proedge-football-training
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   - Run the migration file in your Supabase SQL editor
   - The migration creates all necessary tables and sample data

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📦 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Environment Variables**
   Add these in your Netlify dashboard:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Manual Deployment

```bash
# Build for production
npm run build:production

# Preview the build
npm run preview
```

## 🗄️ Database Schema

### Core Tables

- **`profiles`** - User profiles with position and skill level
- **`training_programs`** - Available training programs
- **`user_progress`** - User progress tracking
- **`training_sessions`** - Individual session records
- **`contact_submissions`** - Contact form submissions

### Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Public read access for training programs
- Secure authentication with Supabase Auth

## 🎯 Training System

### Positions
- **Defender**: Defensive positioning, tackling, leadership
- **Goalkeeper**: Shot-stopping, distribution, command
- **Midfielder**: Passing, vision, dribbling, stamina
- **Striker**: Finishing, movement, speed, power

### Skill Levels
- **Beginner**: Foundation skills (8-12 weeks)
- **Intermediate**: Advanced techniques (10-14 weeks)
- **Advanced**: Complex skills (12-16 weeks)
- **Pro**: Elite performance (16-20 weeks)

### Training Components
- **Physical Training**: Strength and conditioning
- **Stamina Training**: Endurance and fitness
- **Technical Skills**: First touch, dribbling, ball control
- **Position Mastery**: Role-specific skills and tactics

## 🌟 Legendary Skills

Learn signature techniques from football legends:
- **Messi**: Close control and precision
- **Ronaldo**: Power and step-overs
- **De Bruyne**: Vision and passing
- **Van Dijk**: Defensive excellence
- **Neuer**: Modern goalkeeping

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Fast loading and smooth animations

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Component-based architecture

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support, email support@proedge.com or use the contact form on the website.