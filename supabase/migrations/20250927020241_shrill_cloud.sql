/*
  # Create Level Exams Table

  1. New Tables
    - `level_exams`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `level` (text) - beginner, intermediate, advanced, pro
      - `position` (text) - defender, goalkeeper, midfielder, striker
      - `score` (integer) - exam score percentage
      - `passed` (boolean) - whether the exam was passed
      - `answers` (jsonb) - array of user's answers
      - `completed_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `level_exams` table
    - Add policies for users to manage their own exam records
*/

CREATE TABLE IF NOT EXISTS level_exams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  level text NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced', 'pro')),
  position text NOT NULL CHECK (position IN ('defender', 'goalkeeper', 'midfielder', 'striker')),
  score integer NOT NULL CHECK (score >= 0 AND score <= 100),
  passed boolean NOT NULL DEFAULT false,
  answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE level_exams ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own exam results"
  ON level_exams
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own exam results"
  ON level_exams
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own exam results"
  ON level_exams
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);