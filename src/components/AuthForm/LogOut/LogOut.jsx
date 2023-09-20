'use client';
import styles from './logout.module.css';
import { signOut } from 'next-auth/react';

const LogOut = () => {
  return (
    <>
      <button
        className={styles.btnLogout}
        type="button"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Logout
      </button>
    </>
  );
};

export default LogOut;
