import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useActions, useAppSelector } from '@/store/hooks';

export const useScrollView = () => {
  const {
    shouldRendered,
    currRenderedPostsCount,
    postsTop: top
  } = useAppSelector(state => state.scroll);

  const { pathname } = useLocation();
  const ref = useRef<string>('');

  const { setTop } = useActions();

  useEffect(() => {
    if (
      currRenderedPostsCount === shouldRendered &&
      top &&
      pathname !== ref.current
    ) {
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
    onClick
  };
};
