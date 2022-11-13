import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useActions, useAppSelector } from '@/store/hooks';

export const useScrollView = () => {
  const {
    shouldRendered,
    currRenderedPostsCount,
    postsTop: top
  } = useAppSelector(state => state.scroll);
  const { loading: isLoading } = useAppSelector(state => state.idPosts);

  const condition = currRenderedPostsCount === shouldRendered && top;
  const { pathname } = useLocation();
  const ref = useRef<string>('');

  const { setTop } = useActions();

  const scrollTo = useCallback(() => {
    if (isLoading) return;

    if (condition) {
      window.scrollTo({
        top
      });
    }
  }, [currRenderedPostsCount, top, isLoading]);

  useEffect(() => {
    if (condition && pathname !== ref.current) {
      window.scrollTo({
        top
      });
      ref.current = pathname;
    }
  }, [currRenderedPostsCount, top, pathname]);

  const onClick = () => {
    setTop(window.scrollY);
  };

  return {
    onClick,
    scrollTo
  };
};
