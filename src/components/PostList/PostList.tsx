import { FC, useEffect } from 'react';
import { PostItem } from '@/components';
import { Loader } from '@/Loader/Loader';
import { useTimerForUpdatePosts } from '@/hooks/useTimerForUpdatePosts';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './PostList.module.scss';

interface Props {}

const PostList: FC<Props> = () => {
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();

  useTimerForUpdatePosts();

  useEffect(() => {
    !idPosts && fetchIdPosts();
  }, []);

  return (
    <ul className={styles.item}>
      {!loading ? idPosts.map(el => <PostItem key={el} id={el} />) : <Loader />}
    </ul>
  );
};

export { PostList };
