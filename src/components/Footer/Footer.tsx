import { FC, HTMLAttributes } from 'react';
import styles from './Footer.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Footer: FC<Props> = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      &copy; Propertiess news 2022
    </footer>
  );
};

export { Footer };
