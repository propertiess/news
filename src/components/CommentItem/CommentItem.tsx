import { FC, useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { Arrow, CommentList } from '@/components';
import { useFetchedComment } from '@/hooks/useFetchedComment';
import styles from './CommentItem.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOutDown } from '@/animation';

interface Props {
  id: number;
}

const CommentItem: FC<Props> = ({ id }) => {
  const { comment, date, isLoading } = useFetchedComment(id);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const condition = isLoading || typeof comment?.text === 'undefined'

  const toggleShow = () => {
    setIsShowAnswer(prev => !prev);
  };

  return (
    <AnimatePresence>
      {!condition &&
        <motion.li className={styles.item} layout {...fadeInOutDown}>
          <motion.span className={styles.by} layout>
            {comment?.by}
            <motion.span className={styles.date} layout>
              {date.time} {date.date}
            </motion.span>
          </motion.span>
          <motion.span layout>{HTMLReactParser(comment?.text!)}</motion.span>
          {!!comment?.kids?.length && (
            <>
              {!isShowAnswer ? (
                <Arrow title='Show answers' onClick={toggleShow} />
              ) : (
                <Arrow title='Hide answers' up onClick={toggleShow} />
              )}
              {isShowAnswer && <CommentList kids={comment?.kids!} />}
            </>
          )}
        </motion.li>
      }
    </AnimatePresence>
  );
};

export { CommentItem };
