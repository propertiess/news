import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/'>Propertiess news</Link>
    </nav>
  );
};

export { Navbar };
