import { FC, useEffect } from 'react';
import {
  ErrorMessage,
  PostItem,
  RenderMoreItems,
  UpdateButton
} from '@/components';
import { useCountRenderedItems, useTimerForUpdatePosts } from '@/hooks';
import { useActions, useAppSelector } from '@/store/hooks';
import styles from './PostList.module.scss';

interface Props {}

const PostList: FC<Props> = () => {
  const { idPosts, loading, error } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();
  const {
    countRenderedItems,
    incrementCountRenderedItems,
    resetToLoadedItems
  } = useCountRenderedItems(10, idPosts?.length);

  useTimerForUpdatePosts();

  useEffect(() => {
    !idPosts && fetchIdPosts();
  }, []);

  if (error) return <ErrorMessage message={error.message} />;

  const updatePosts = () => {
    fetchIdPosts();
    resetToLoadedItems();
  };

  return (
    <>
      <UpdateButton title='Update posts' onClick={updatePosts} />
      <ul className={styles.item}>
        {!loading &&
          idPosts &&
          idPosts
            .slice(0, countRenderedItems)
            .map(el => <PostItem key={el} id={el} />)}
        <RenderMoreItems
          countRenderedItems={countRenderedItems}
          renderMore={incrementCountRenderedItems}
          to={idPosts?.length}
        />
      </ul>
    </>
  );
};

export { PostList };
