import { FC } from 'react';
import { CommentItem, Loader, UpdateButton } from '@/components';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './CommentList.module.scss';

interface Props {
  kids: number[] | undefined;
  count?: number;
}

const CommentList: FC<Props> = ({ kids, count }) => {
  const stylesWrap = count ? styles.wrap : styles.kid;
  const { post, loadingComments } = useAppSelector(state => state.post);
  const { fetchCommentsPost } = useActions();

  if (!kids?.length) return null;

  if (loadingComments) return <Loader />;

  return (
    <ul className={stylesWrap}>
      {count && (
        <p className={styles.count}>
          Commentaries: {count}
          <UpdateButton
            title='Update comments'
            onClick={() => fetchCommentsPost(post.id)}
          />
        </p>
      )}
      {kids.map(el => (
        <CommentItem key={el} id={el} />
      ))}
    </ul>
  );
};

export { CommentList };
