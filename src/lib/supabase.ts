import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  position: 'defender' | 'goalkeeper' | 'midfielder' | 'striker' | null;
  skill_level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  subscription_plan: 'basic' | 'pro' | 'elite';
  created_at: string;
  updated_at: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  position: 'defender' | 'goalkeeper' | 'midfielder' | 'striker';
  skill_level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  duration_weeks: number;
  sessions_per_week: number;
  program_type: 'physical' | 'technical' | 'stamina' | 'position_specific';
  exercises: Array<{ name: string; duration: string }>;
  equipment_needed: string[];
  difficulty_rating: number;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  program_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progress_percentage: number;
  sessions_completed: number;
  total_sessions: number;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface TrainingSession {
  id: string;
  user_id: string;
  program_id: string;
  session_number: number;
  session_type: 'technical' | 'physical' | 'tactical' | 'match_prep';
  duration_minutes: number;
  exercises_completed: Array<{ name: string; completed: boolean }>;
  performance_rating: number | null;
  notes: string | null;
  completed_at: string;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  inquiry_type: 'general' | 'technical' | 'billing' | 'coaching' | 'partnership' | 'media';
  status: 'new' | 'in_progress' | 'resolved';
  created_at: string;
}

export interface AIAnalysisResult {
  id: string;
  user_id: string;
  position: 'defender' | 'goalkeeper' | 'midfielder' | 'striker';
  skill_type: string;
  video_filename: string;
  analysis_data: {
    overallScore: number;
    position: string;
    skill: string;
    strengths: string[];
    improvements: string[];
    recommendations: string[];
    technicalMetrics: Record<string, number>;
    nextSteps: string[];
  };
  overall_score: number;
  created_at: string;
  updated_at: string;
}

export interface LevelExam {
  id: string;
  user_id: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  position: 'defender' | 'goalkeeper' | 'midfielder' | 'striker';
  score: number;
  passed: boolean;
  answers: number[];
  completed_at: string;
  created_at: string;
}