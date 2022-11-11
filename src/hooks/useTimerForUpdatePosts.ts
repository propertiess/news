import { useEffect, useRef } from 'react';
import { useActions, useAppSelector } from '@/store/hooks';

export const useTimerForUpdatePosts = (resetLoadedItems: () => void) => {
  const timer = useRef<NodeJS.Timeout>();
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();

  useEffect(() => {
    if (loading) return;
    timer.current = setTimeout(() => {
      fetchIdPosts();
      resetLoadedItems();
    }, 60000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [idPosts, loading]);
};
