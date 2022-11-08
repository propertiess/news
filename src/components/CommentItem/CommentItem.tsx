import { FC, useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { Arrow, CommentList } from '@/components';
import { useFetchedComment } from '@/hooks/useFetchedComment';
import styles from './CommentItem.module.scss';

interface Props {
  id: number;
}

const CommentItem: FC<Props> = ({ id }) => {
  const { comment, date, isLoading } = useFetchedComment(id);
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const toggleShow = () => {
    setIsShowAnswer(prev => !prev);
  };

  if (isLoading || typeof comment?.text === 'undefined') return null;

  return (
    <li className={styles.item}>
      <span className={styles.by}>
        {comment?.by}
        <span className={styles.date}>
          {date.time} {date.date}
        </span>
      </span>
      <span>{HTMLReactParser(comment?.text!)}</span>
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
    </li>
  );
};

export { CommentItem };
