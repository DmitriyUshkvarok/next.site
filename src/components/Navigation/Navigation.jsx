'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import { useLogoutMutation } from '@/src/redux/authApi/authApi';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About Me',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const [logout] = useLogoutMutation();

  const isPhone = useMediaQuery({ minWidth: 660 });

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          WebDeveloper
        </Link>
        <div className={styles.burgerWrapper}>{!isPhone && <BurgerMenu />}</div>
        <ul className={styles.navigationList}>
          {links.map((link) => (
            <li key={link.id} className={styles.navigationItem}>
              <Link
                href={link.url}
                className={pathname === link.url ? styles.activeLink : ''}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.logout} type="button" onClick={handleLogOut}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
