'use client';
import Link from 'next/link';
import styles from './adminPanel.module.css';
import { MdAdminPanelSettings } from 'react-icons/md';
import { fredericka } from '@/src/app/fonts';
import { usePathname } from 'next/navigation';

const AdminPanel = () => {
  const pathname = usePathname();
  return (
    <div className={fredericka.className}>
      <h1 className={styles.adminPanelTitle}>Admin panel</h1>
      <ul className={styles.adminPanelList}>
        <li
          className={
            (styles.adminPanelItem,
            pathname === '/admin/profile'
              ? styles.activeLink
              : styles.adminPanelItem)
          }
        >
          <Link className={styles.adminPanelLink} href="/admin/profile">
            Profile
          </Link>
        </li>
        <li
          className={
            (styles.adminPanelItem,
            pathname === '/admin/edit-portfolio'
              ? styles.activeLink
              : styles.adminPanelItem)
          }
        >
          <Link className={styles.adminPanelLink} href="/admin/edit-portfolio">
            Edit Portfolio
          </Link>
        </li>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/edit-about">
            Edit About
          </Link>
        </li>
        <li
          className={
            (styles.adminPanelItem,
            pathname === '/admin/edit-comments'
              ? styles.activeLink
              : styles.adminPanelItem)
          }
        >
          <Link className={styles.adminPanelLink} href="/admin/edit-comments">
            Edit Comments
          </Link>
        </li>
        <li
          className={
            (styles.adminPanelItem,
            pathname === '/admin/edit-users'
              ? styles.activeLink
              : styles.adminPanelItem)
          }
        >
          <Link className={styles.adminPanelLink} href="/admin/edit-users">
            User List
          </Link>
        </li>
        <li
          className={
            (styles.adminPanelItem,
            pathname === '/admin/edit-gallery'
              ? styles.activeLink
              : styles.adminPanelItem)
          }
        >
          <Link className={styles.adminPanelLink} href="/admin/edit-gallery">
            Edit Gallery
          </Link>
        </li>
        <li className={styles.adminPanelItemIcon}>
          <MdAdminPanelSettings size={200} />
        </li>
      </ul>
    </div>
  );
};

export default AdminPanel;
