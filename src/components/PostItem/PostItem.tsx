import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFetchedPost } from '@/hooks/useFetchedPost';
import styles from './PostItem.module.scss';

interface Props {
  id: number;
}

const PostItem: FC<Props> = ({ id }) => {
  const { post, date, isLoading } = useFetchedPost(id);

  if (isLoading) return null;

  return (
    <li className={styles.post}>
      <Link className={styles.title} to={`/post/${id}`}>
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
