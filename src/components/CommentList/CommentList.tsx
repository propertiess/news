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
  isKid?: boolean;
}

const CommentList: FC<Props> = ({ kids, count, isKid }) => {
  const { post, loadingComments } = useAppSelector(state => state.post);
  const { fetchCommentsPost } = useActions();
  const { countRenderedItems, incrementCountRenderedItems } =
    useCountRenderedItems(10, kids?.length!);

  const stylesWrap = count ? styles.wrap : styles.kid;

  if (loadingComments) return <Loader />;

  const updateComments = () => {
    fetchCommentsPost(post.id);
  };

  if (!count) return null;

  return (
    <AnimatePresence>
      {!!kids?.length && (
        <motion.ul className={stylesWrap} layout {...fadeInOut}>
          {count && !isKid && (
            <p className={styles.count}>
              {count} commentaries
              <UpdateButton title='Update comments' onClick={updateComments} />
            </p>
          )}
          <AnimatePresence initial={false} mode='popLayout'>
            {kids &&
              kids
                .slice(0, countRenderedItems)
                .map(el => <CommentItem key={el} id={el} count={count} />)}
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
