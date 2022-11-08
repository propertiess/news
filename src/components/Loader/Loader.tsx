import { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
        <ClipLoader color='blue' />
      </div>
    </div>
  );
};

export { Loader };
