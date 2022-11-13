import { useEffect } from 'react';
import { useActions, useAppSelector } from '@/store/hooks';

export const useScrollView = () => {
  const {
    shouldRendered,
    currRenderedPostsCount,
    postsTop: top
  } = useAppSelector(state => state.scroll);

  const { loading: isLoading } = useAppSelector(state => state.idPosts);

  const { setTop } = useActions();

  useEffect(() => {
    if (isLoading) return;

    if (currRenderedPostsCount === shouldRendered && top) {
      window.scrollTo({
        top
      });
    }
  }, [currRenderedPostsCount, top, isLoading]);

  const onClick = () => {
    setTop(window.scrollY);
  };

  return {
    onClick
  };
};
