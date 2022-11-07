import { FC, HTMLAttributes } from 'react';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.scss';

interface Props extends HTMLAttributes<unknown> {}

const Header: FC<Props> = ({ ...rest }) => {
  return (
    <header className={styles.header} {...rest}>
      <Navbar />
    </header>
  );
};

export { Header };
