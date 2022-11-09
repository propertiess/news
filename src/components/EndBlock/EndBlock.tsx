import { FC } from 'react';
import styles from './EndBlock.module.scss';

interface Props {
  isEnd: boolean;
}

const EndBlock: FC<Props> = ({ isEnd }) => {
  if (!isEnd) return null;

  return <span className={styles.end} data-testid='end-block'></span>;
};

export { EndBlock };
