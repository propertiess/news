import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CommentItem,
  Loader,
  RenderMoreItems,
  UpdateButton
} from '@/components';
import { fadeInOut } from '@/animation';
import { useCountRenderedItems } from '@/hooks';
import { useActions, useAppSelector } from '@/store/hooks';
import styles from './CommentList.module.scss';

interface Props {
  kids: number[];
  count?: number;
}

const CommentList: FC<Props> = ({ kids, count }) => {
  const { post, loadingComments } = useAppSelector(state => state.post);
  const { fetchCommentsPost } = useActions();
  const {
    countRenderedItems,
    incrementCountRenderedItems,
    resetToLoadedItems
  } = useCountRenderedItems(10, kids?.length!);

  const stylesWrap = count ? styles.wrap : styles.kid;

  if (loadingComments) return <Loader />;

  const updateComments = () => {
    fetchCommentsPost(post.id);
    resetToLoadedItems();
  };

  return (
    <AnimatePresence>
      {!!kids?.length && (
        <motion.ul className={stylesWrap} layout {...fadeInOut}>
          {count && (
            <p className={styles.count}>
              {count} commentaries
              <UpdateButton title='Update comments' onClick={updateComments} />
            </p>
          )}
          <AnimatePresence initial={false} mode='popLayout'>
            {kids &&
              kids
                .slice(0, countRenderedItems)
                .map(el => <CommentItem key={el} id={el} />)}
          </AnimatePresence>
          <RenderMoreItems
            countRenderedItems={countRenderedItems}
            renderMore={incrementCountRenderedItems}
            to={kids?.length!}
          />
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export { CommentList };
