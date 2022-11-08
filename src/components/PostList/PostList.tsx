import { FC, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Loader, PostItem } from '@/components';
import { useTimerForUpdatePosts } from '@/hooks/useTimerForUpdatePosts';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './PostList.module.scss';

interface Props {}

const PostList: FC<Props> = () => {
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const [countRenderedPost, setCountRenderedPost] = useState(10);
  const { fetchIdPosts } = useActions();

  useTimerForUpdatePosts();

  useEffect(() => {
    !idPosts && fetchIdPosts();
  }, []);

  const incrementCountRenderedPost = (inView: any) => {
    if (!inView) return;
    if (countRenderedPost === idPosts?.length) return;

    let incrementedCount = countRenderedPost + 10;

    if (incrementedCount > idPosts?.length) {
      incrementedCount = idPosts.length;
      setCountRenderedPost(incrementedCount);
      return;
    }

    setCountRenderedPost(incrementedCount);
  };

  return (
    <ul className={styles.item}>
      {!loading &&
        idPosts
          .slice(0, countRenderedPost)
          .map(el => <PostItem key={el} id={el} />)}
      {countRenderedPost !== idPosts?.length && !loading && (
        <InView as='li' onChange={incrementCountRenderedPost}>
          <Loader />
        </InView>
      )}
    </ul>
  );
};

export { PostList };
