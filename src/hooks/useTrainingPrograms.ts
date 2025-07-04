import { useState, useEffect } from 'react';
import { supabase, TrainingProgram } from '../lib/supabase';

export function useTrainingPrograms(position?: string, skillLevel?: string) {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        setLoading(true);
        let query = supabase.from('training_programs').select('*');

        if (position) {
          query = query.eq('position', position);
        }

        if (skillLevel) {
          query = query.eq('skill_level', skillLevel);
        }

        const { data, error } = await query.order('skill_level', { ascending: true });

        if (error) throw error;

        setPrograms(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, [position, skillLevel]);

  return { programs, loading, error };
}