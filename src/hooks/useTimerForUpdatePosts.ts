import { useEffect, useRef } from 'react';
import { useActions, useAppSelector } from '@/store/hooks';

export const useTimerForUpdatePosts = () => {
  const timer = useRef<NodeJS.Timeout>();
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts, setTop } = useActions();

  useEffect(() => {
    if (loading) return;
    timer.current = setTimeout(() => {
      setTop(window.scrollY);
      fetchIdPosts();
    }, 60000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [idPosts, loading]);
};
