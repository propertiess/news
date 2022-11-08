import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFetchedPost } from '@/hooks';
import { useAppSelector } from '@/store/hooks';
import styles from './PostItem.module.scss';

interface Props {
  id: number;
}

const PostItem: FC<Props> = ({ id }) => {
  const { post, date, isLoading } = useFetchedPost(id);
  const history = useHistory();
  const { idPosts } = useAppSelector(state => state.idPosts);
  const end = idPosts[idPosts.length - 1] === id && true;

  if (isLoading) return null;

  return (
    <>
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
      {end && <li className={styles.end}></li>}
    </>
  );
};

export { PostItem };
