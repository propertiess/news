import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from '/logo.svg';

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <img src={Logo} alt='logo' color='red' /> <span>Propertiess news</span>
      </Link>
    </nav>
  );
};

export { Navbar };
