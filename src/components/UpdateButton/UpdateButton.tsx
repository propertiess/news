import { FC } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import styles from './UpdateButton.module.scss';

interface Props {
  title: string;
  onClick?: () => void;
}
const UpdateButton: FC<Props> = ({ title, onClick }) => {
  return (
    <button className={styles.btn} data-testid='btn'>
      <span onClick={onClick}>
        {title}
        <ArrowPathIcon width={14} height={14} />
      </span>
    </button>
  );
};

export { UpdateButton };
