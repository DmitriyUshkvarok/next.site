'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import AuthNav from '../../Auth/AuthNav/AuthNav';
import { permanentMarker, fredericka } from '@/src/app/fonts';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

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
    title: 'Gallery',
    url: '/gallery',
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

  const isPhone = useMediaQuery({ minWidth: 845 });
  const ismediaQuery = useMediaQuery({ minWidth: 590 });

  const { t } = useTranslation();

  return (
    <div className={(styles.container, fredericka.className)}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          <p className={fredericka.className}>Dmitriy Ushkvarok</p>
          <p className={(styles.subTitleLogo, permanentMarker.className)}>
            WebDeveloper
          </p>
        </Link>
        {ismediaQuery && (
          <div className={styles.authNavWrapper}>
            <AuthNav />
          </div>
        )}
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
        <div className={styles.burgerWrapper}>{!isPhone && <BurgerMenu />}</div>
        <div className={styles.themeAndLanguageBox}>
          <div>
            <ThemeSwitcher />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
