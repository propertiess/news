import { FC } from 'react';
import { CommentItem, UpdateButton } from '@/components';
import styles from './CommentList.module.scss';

interface Props {
  kids: number[] | undefined;
  count?: number;
}

const CommentList: FC<Props> = ({ kids, count }) => {
  const stylesWrap = count ? styles.wrap : styles.kid;

  if (!kids?.length) return null;

  return (
    <ul className={stylesWrap}>
      {count && (
        <p className='flex justify-between'>
          Commentaries: {count}
          <UpdateButton title='Update comments' />
        </p>
      )}
      {kids.map(el => (
        <CommentItem key={el} id={el} />
      ))}
    </ul>
  );
};

export { CommentList };
