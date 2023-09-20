'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

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
];

const Navigation = () => {
  const pathname = usePathname();

  const isPhone = useMediaQuery({ minWidth: 690 });

  const { t } = useTranslation();

  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          <p>Dmitriy Ushkvarok</p>
          <p className={styles.subTitleLogo}> WebDeveloper</p>
        </Link>
        <div className={styles.burgerWrapper}>{!isPhone && <BurgerMenu />}</div>
        <ul className={styles.navigationList}>
          {links.map((link) => (
            <li key={link.id} className={styles.navigationItem}>
              <Link
                href={link.url}
                className={pathname === link.url ? styles.activeLink : ''}
              >
                {t('nav.' + link.title.toLowerCase())}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSelector />
      </nav>
    </div>
  );
};

export default Navigation;
