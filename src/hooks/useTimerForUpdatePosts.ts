import { useEffect, useRef } from 'react';
import { useScrollView } from '@/hooks/useScrollView';
import { useActions, useAppSelector } from '@/store/hooks';

export const useTimerForUpdatePosts = () => {
  const timer = useRef<NodeJS.Timeout>();
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts, setTop } = useActions();
  const { scrollTo } = useScrollView();

  useEffect(() => {
    if (loading) return;
    timer.current = setTimeout(() => {
      setTop(window.scrollY);
      fetchIdPosts();
      scrollTo();
    }, 60000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [idPosts, loading]);
};
