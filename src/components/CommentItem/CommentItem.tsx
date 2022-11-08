import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HTMLReactParser from 'html-react-parser';
import { Arrow, CommentList } from '@/components';
import { fadeInOutDown } from '@/animation';
import { useFetchedComment } from '@/hooks/useFetchedComment';
import { getTimeFromNow } from '@/utils/helpers/getTimeFromNow';
import styles from './CommentItem.module.scss';

interface Props {
  id: number;
}

const CommentItem: FC<Props> = ({ id }) => {
  const { comment, date, isLoading } = useFetchedComment(id);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const { time } = getTimeFromNow(date.initDate);

  const condition = isLoading || typeof comment?.text === 'undefined';

  const toggleShow = () => {
    setIsShowAnswer(prev => !prev);
  };

  return (
    <AnimatePresence>
      {!condition && (
        <motion.li className={styles.item} layout {...fadeInOutDown}>
          <motion.span className={styles.by} layout>
            {comment?.by}
            <motion.span className={styles.date} layout>
              {time}
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
      )}
    </AnimatePresence>
  );
};

export { CommentItem };
