import { FC, useEffect } from 'react';
import { Loader } from '@/Loader/Loader';
import { useTimerForUpdatePosts } from '@/hooks/useTimerForUpdatePosts';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import { PostItem } from '@/components';
import styles from './PostList.module.scss';

interface Props {}

const PostList: FC<Props> = () => {
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();

  useTimerForUpdatePosts();

  useEffect(() => {
    fetchIdPosts();
  }, []);

  return (
    <ul className={styles.item}>
      {!loading ? idPosts.map(el => <PostItem key={el} id={el} />) : <Loader />}
    </ul>
  );
};

export { PostList };
