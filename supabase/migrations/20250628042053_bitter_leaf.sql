/*
  # Initial ProEdge Football Training Schema

  1. New Tables
    - `profiles` - User profiles with position and skill level
    - `training_programs` - Available training programs by position and level
    - `user_progress` - Track user progress through programs
    - `training_sessions` - Individual training session records
    - `contact_submissions` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Public read access for training programs
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text NOT NULL,
  position text CHECK (position IN ('defender', 'goalkeeper', 'midfielder', 'striker')),
  skill_level text CHECK (skill_level IN ('beginner', 'intermediate', 'advanced', 'pro')) DEFAULT 'beginner',
  subscription_plan text CHECK (subscription_plan IN ('basic', 'pro', 'elite')) DEFAULT 'basic',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create training programs table
CREATE TABLE IF NOT EXISTS training_programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  position text NOT NULL CHECK (position IN ('defender', 'goalkeeper', 'midfielder', 'striker')),
  skill_level text NOT NULL CHECK (skill_level IN ('beginner', 'intermediate', 'advanced', 'pro')),
  duration_weeks integer NOT NULL DEFAULT 8,
  sessions_per_week integer NOT NULL DEFAULT 4,
  program_type text NOT NULL CHECK (program_type IN ('physical', 'technical', 'stamina', 'position_specific')),
  exercises jsonb NOT NULL DEFAULT '[]',
  equipment_needed text[] DEFAULT '{}',
  difficulty_rating integer CHECK (difficulty_rating BETWEEN 1 AND 5) DEFAULT 3,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  program_id uuid REFERENCES training_programs(id) ON DELETE CASCADE,
  status text CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'not_started',
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage BETWEEN 0 AND 100),
  sessions_completed integer DEFAULT 0,
  total_sessions integer DEFAULT 0,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, program_id)
);

-- Create training sessions table
CREATE TABLE IF NOT EXISTS training_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  program_id uuid REFERENCES training_programs(id) ON DELETE CASCADE,
  session_number integer NOT NULL,
  session_type text NOT NULL CHECK (session_type IN ('technical', 'physical', 'tactical', 'match_prep')),
  duration_minutes integer NOT NULL DEFAULT 45,
  exercises_completed jsonb DEFAULT '[]',
  performance_rating integer CHECK (performance_rating BETWEEN 1 AND 5),
  notes text,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  inquiry_type text DEFAULT 'general' CHECK (inquiry_type IN ('general', 'technical', 'billing', 'coaching', 'partnership', 'media')),
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for training programs (public read)
CREATE POLICY "Anyone can read training programs"
  ON training_programs
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Create policies for user progress
CREATE POLICY "Users can read own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for training sessions
CREATE POLICY "Users can read own sessions"
  ON training_sessions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON training_sessions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON training_sessions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for contact submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Insert sample training programs
INSERT INTO training_programs (title, description, position, skill_level, program_type, exercises, equipment_needed) VALUES
-- Defender Programs
('Defensive Foundation', 'Master basic defensive positioning and tackling fundamentals', 'defender', 'beginner', 'position_specific', 
 '[{"name": "Basic Positioning", "duration": "10 mins"}, {"name": "Tackling Technique", "duration": "15 mins"}]', 
 '{"football", "cones", "markers"}'),
('Advanced Defensive Tactics', 'Elite defensive positioning and leadership skills', 'defender', 'advanced', 'position_specific',
 '[{"name": "Tactical Defending", "duration": "15 mins"}, {"name": "Leadership Drills", "duration": "20 mins"}]',
 '{"football", "cones", "training partner"}'),

-- Goalkeeper Programs  
('Goalkeeper Basics', 'Fundamental shot-stopping and distribution skills', 'goalkeeper', 'beginner', 'position_specific',
 '[{"name": "Basic Shot Stopping", "duration": "12 mins"}, {"name": "Distribution Practice", "duration": "18 mins"}]',
 '{"football", "goal", "gloves"}'),
('Elite Goalkeeper Training', 'Professional-level goalkeeping techniques', 'goalkeeper', 'pro', 'position_specific',
 '[{"name": "Advanced Shot Stopping", "duration": "20 mins"}, {"name": "Sweeper Keeper Skills", "duration": "25 mins"}]',
 '{"football", "goal", "gloves", "cones"}'),

-- Midfielder Programs
('Midfield Mastery Basics', 'Essential passing and first touch development', 'midfielder', 'beginner', 'technical',
 '[{"name": "First Touch Training", "duration": "15 mins"}, {"name": "Simple Passing", "duration": "20 mins"}]',
 '{"football", "wall", "cones"}'),
('Playmaker Development', 'Advanced vision and passing range training', 'midfielder', 'advanced', 'technical',
 '[{"name": "Vision Training", "duration": "18 mins"}, {"name": "Long Range Passing", "duration": "22 mins"}]',
 '{"football", "targets", "partner"}'),

-- Striker Programs
('Striker Fundamentals', 'Basic finishing and movement in the box', 'striker', 'beginner', 'position_specific',
 '[{"name": "Basic Finishing", "duration": "12 mins"}, {"name": "Movement Training", "duration": "18 mins"}]',
 '{"football", "goal", "cones"}'),
('Elite Finishing', 'Professional-level goal scoring techniques', 'striker', 'pro', 'position_specific',
 '[{"name": "Clinical Finishing", "duration": "20 mins"}, {"name": "Advanced Movement", "duration": "25 mins"}]',
 '{"football", "goal", "markers", "targets"}');