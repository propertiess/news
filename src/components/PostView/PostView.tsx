import { FC, useEffect } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useHistory } from 'react-router-dom';
import { CommentList, Loader } from '@/components';
import { useDate } from '@/hooks/useDate';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';
import styles from './PostView.module.scss';

interface Props {
  id: string;
}

const PostView: FC<Props> = ({ id }) => {
  const { post, loading } = useAppSelector(state => state.post);
  const date = useDate(post?.time);
  const { fetchPost } = useActions();
  const history = useHistory();

  useEffect(() => {
    fetchPost(+id);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrap}>
      <ArrowUturnLeftIcon
        className={styles.back}
        width={20}
        height={20}
        onClick={() => history.push('/')}
      />
      <p className={styles.date}>
        {date?.time} {date?.date}
      </p>
      <h2>{post?.title}</h2>
      <div>
        <a href={post?.url}>Reference to the source</a>
      </div>
      <p className={styles.by}>Created by {post?.by}</p>
      <CommentList kids={post?.kids} count={post?.descendants!} />
    </div>
  );
};

export { PostView };
