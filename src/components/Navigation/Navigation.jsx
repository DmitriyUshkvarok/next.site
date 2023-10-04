'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMediaQuery } from 'react-responsive';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import AuthNav from '../AuthForm/AuthNav/AuthNav';
import { permanentMarker, fredericka } from '@/src/app/fonts';

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

  return (
    <div className={(styles.container, fredericka.className)}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          <p className={fredericka.className}>Dmitriy Ushkvarok</p>
          <p className={(styles.subTitleLogo, permanentMarker.className)}>
            WebDeveloper
          </p>
          {/* <Image
            className={styles.logoIcon}
            src="/logoIcon.png"
            alt="logo icon"
            width={80}
            height={80}
          /> */}
        </Link>
        <div className={styles.burgerWrapper}>{!isPhone && <BurgerMenu />}</div>
        <div className={styles.authNavWrapper}>
          <AuthNav />
        </div>
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
