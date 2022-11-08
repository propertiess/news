import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFetchedPost } from '@/hooks/useFetchedPost';
import styles from './PostItem.module.scss';

interface Props {
  id: number;
}

const PostItem: FC<Props> = ({ id }) => {
  const { post, date, isLoading } = useFetchedPost(id);
  const history = useHistory();

  if (isLoading) return null;

  return (
    <li className={styles.post} onClick={() => history.push(`/post/${id}`)}>
      <Link className={styles.title} to={`/post/${id}`} replace>
        {post?.title}
      </Link>
      <p className={styles.dateAndCreated}>
        <span className={styles.date}>
          {date?.date} {date?.time}
          <label className={styles.score}>Rating: {post?.score}</label>
        </span>
        <span className={styles.createdBy}>Created by {post?.by}</span>
      </p>
    </li>
  );
};

export { PostItem };
