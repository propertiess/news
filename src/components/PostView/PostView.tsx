import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Loader } from '@/Loader/Loader';
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
      <button onClick={() => history.goBack()}>Back to posts</button>
      <p className={styles.date}>
        {date?.time} {date?.date} Commentaries: {post?.descendants}
      </p>
      <h2>{post?.title}</h2>
      <div>
        <a href={post?.url}>Reference to the source</a>
      </div>
      <p className={styles.by}>Created by {post?.by}</p>
    </div>
  );
};

export { PostView };
