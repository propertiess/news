import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CommentItem, Loader, UpdateButton } from '@/components';
import { fadeInOut } from '@/animation';
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

  if (loadingComments) return <Loader />;

  return (
    <AnimatePresence>
      {!!kids?.length && (
        <motion.ul className={stylesWrap} layout {...fadeInOut}>
          {count && (
            <p className={styles.count}>
              Commentaries: {count}
              <UpdateButton
                title='Update comments'
                onClick={() => fetchCommentsPost(post.id)}
              />
            </p>
          )}
          <AnimatePresence initial={false} mode='popLayout'>
            {kids && kids.map(el => <CommentItem key={el} id={el} />)}
          </AnimatePresence>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export { CommentList };
