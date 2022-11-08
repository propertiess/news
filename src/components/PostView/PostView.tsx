import { FC } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useHistory } from 'react-router-dom';
import { CommentList, Loader } from '@/components';
import { useFetchedPost } from '@/hooks/useFetchedPost';
import styles from './PostView.module.scss';

interface Props {
  id: string;
}

const PostView: FC<Props> = ({ id }) => {
  const history = useHistory();
  const { post, date, isLoading } = useFetchedPost(+id);

  if (isLoading) {
    return (
      <div className='relative'>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <ArrowUturnLeftIcon
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
