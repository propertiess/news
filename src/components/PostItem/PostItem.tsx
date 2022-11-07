import { FC, useEffect, useState } from 'react';
import { IPost } from '@/interfaces/post.interface';
import { PostService } from '@/services/post.service';
import { getDate } from '@/utils/helpers/getDate';
import styles from './PostItem.module.scss';

interface Props {
  id: number;
}

const PostItem: FC<Props> = ({ id }) => {
  const [post, setPost] = useState<IPost>();
  const [date, setDate] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await PostService.fetchPost(id);
      setPost(data);
      const { date, time } = getDate(data.time);

      setDate(`${date} ${time}`)
    };
    fetchPost();
  }, []);

  return (
    <li className={styles.post}>
      <h3 className={styles.title}>{post?.title}</h3>
      <p className={styles.dateAndCreated}>
        <span className={styles.date}>
          {date}
          <label className={styles.score}>Rating: {post?.score}</label>
        </span>
        <span className={styles.createdBy}>Created by {post?.by}</span>
      </p>
    </li>
  );
};

export { PostItem };
