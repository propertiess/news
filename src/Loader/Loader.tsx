import { FC, HTMLAttributes } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Loader: FC<Props> = () => {
  return (
    <div className={styles.item}>
      <ClipLoader color='blue' />
    </div>
  );
};

export { Loader };
