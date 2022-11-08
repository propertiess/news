import { FC, useEffect } from 'react';
import { PostItem } from '@/components';
import { useCountRenderedItems } from '@/hooks/useCountRenderedItems';
import { useTimerForUpdatePosts } from '@/hooks/useTimerForUpdatePosts';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import { RenderMoreItems } from '../RenderMoreItems/RenderMoreItems';
import styles from './PostList.module.scss';

interface Props {}

const PostList: FC<Props> = () => {
  const { idPosts, loading } = useAppSelector(state => state.idPosts);
  const { fetchIdPosts } = useActions();
  const { countRenderedItems, incrementCountRenderedItems } =
    useCountRenderedItems(10, idPosts?.length);

  useTimerForUpdatePosts();

  useEffect(() => {
    !idPosts && fetchIdPosts();
  }, []);

  return (
    <ul className={styles.item}>
      {!loading &&
        idPosts
          .slice(0, countRenderedItems)
          .map(el => <PostItem key={el} id={el} />)}
      <RenderMoreItems
        countRenderedItems={countRenderedItems}
        renderMore={incrementCountRenderedItems}
        to={idPosts?.length}
      />
    </ul>
  );
};

export { PostList };
