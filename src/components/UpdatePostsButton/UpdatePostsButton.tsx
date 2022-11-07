import { FC } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useActions } from '@/store/hooks/useActions';
import styles from './UpdatePostsButton.module.scss';

const UpdatePostsButton: FC = () => {
  const { fetchIdPosts } = useActions();

  return (
    <div className={styles.btn} onClick={() => fetchIdPosts()}>
      <span>Update posts</span>
      <ArrowPathIcon width={14} height={14} />
    </div>
  );
};

export { UpdatePostsButton };
