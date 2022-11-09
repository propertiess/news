import { FC, HTMLAttributes } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import styles from './UpdateButton.module.scss';

interface Props extends HTMLAttributes<unknown> {
  title: string;
}
const UpdateButton: FC<Props> = ({ title, ...rest }) => {
  return (
    <button className={styles.btn} data-testid='btn' {...rest}>
      <span>
        {title}
        <ArrowPathIcon width={14} height={14} />
      </span>
    </button>
  );
};

export { UpdateButton };
