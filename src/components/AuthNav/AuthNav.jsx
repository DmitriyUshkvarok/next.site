'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import LogOut from '../AuthForm/LogOut/LogOut';
import styles from './authNav.module.css';
import Image from 'next/image';

const AuthNav = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className={styles.authNavWrapper}>
          <div className={styles.authNavLinkBox}>
            {session?.user?.role === 'admin' ? (
              <Link
                className={styles.authNavLink}
                href="/admin"
                style={{ color: 'aqua' }}
              >
                Admin
              </Link>
            ) : (
              <Link
                className={styles.authNavLink}
                href="/profile"
                style={{ color: 'aqua' }}
              >
                Profile
              </Link>
            )}
          </div>
          <div className={styles.avatarWrapper}>
            <Image
              className={styles.avatar}
              src={
                session?.user?.image ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDX326p2qgkC1VI2N1jm1u_Ihb2PAM8MecsWOJfIBSESk_GmadQUf4INIVkBpzvut48&usqp=CAU'
              }
              alt={session?.user?.name || 'avatar'}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.authNavLinkBox}>
            <LogOut />
          </div>
        </div>
      ) : (
        <div className={styles.authNavWrapper}>
          <div className={styles.authNavLinkBox}>
            <Link
              href="/signin"
              style={{ color: 'aqua' }}
              className={styles.authNavLink}
            >
              Signin
            </Link>
          </div>
          <div className={styles.authNavLinkBox}>
            <Link
              href="/signup"
              style={{ color: 'aqua' }}
              className={styles.authNavLink}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
