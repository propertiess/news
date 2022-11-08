import { FC, HTMLAttributes } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import styles from './Arrow.module.scss';

interface Props extends HTMLAttributes<unknown> {
  up?: boolean;
  title: string;
}

const Arrow: FC<Props> = ({ up, title, ...rest }) => {
  if (up)
    return (
      <span className={styles.arrow} {...rest}>
        {title} <ArrowUpIcon width={15} height={15} />
      </span>
    );

  return (
    <span className={styles.arrow} {...rest}>
      {title} <ArrowDownIcon width={15} height={15} />
    </span>
  );
};

export { Arrow };
