/*
  # Create AI Analysis Results Table

  1. New Table
    - `ai_analysis_results` - Store AI analysis results for user videos

  2. Security
    - Enable RLS on the table
    - Users can only access their own analysis results
*/

CREATE TABLE IF NOT EXISTS ai_analysis_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  position text NOT NULL CHECK (position IN ('defender', 'goalkeeper', 'midfielder', 'striker')),
  skill_type text NOT NULL,
  video_filename text NOT NULL,
  analysis_data jsonb NOT NULL DEFAULT '{}',
  overall_score integer CHECK (overall_score BETWEEN 0 AND 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE ai_analysis_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own analysis results"
  ON ai_analysis_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own analysis results"
  ON ai_analysis_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own analysis results"
  ON ai_analysis_results
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);