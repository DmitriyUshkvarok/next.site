import Navigation from '../Navigation/Navigation';
import styles from './header.module.css';
import AuthNav from '../AuthNav/AuthNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default Header;
