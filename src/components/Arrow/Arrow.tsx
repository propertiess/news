import { FC } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import styles from './Arrow.module.scss';

interface Props {
  up?: boolean;
  title: string;
  onClick: () => void;
}

const Arrow: FC<Props> = ({ up, title, onClick }) => {
  if (up)
    return (
      <motion.span
        className={styles.arrow}
        layout
        onClick={onClick}
        data-testid='arrow-up'
      >
        {title} <ArrowUpIcon width={15} height={15} />
      </motion.span>
    );

  return (
    <motion.span
      className={styles.arrow}
      layout
      onClick={onClick}
      data-testid='arrow-down'
    >
      {title} <ArrowDownIcon width={15} height={15} />
    </motion.span>
  );
};

export { Arrow };
