import { useEffect, useRef } from 'react';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';

export const useTimerForUpdatePosts = () => {
  const timer = useRef<NodeJS.Timeout>();
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();

  useEffect(() => {
    if (loading) return;
    timer.current = setTimeout(() => {
      fetchIdPosts();
    }, 60000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [idPosts, loading]);
};
