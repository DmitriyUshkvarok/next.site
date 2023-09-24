import Link from 'next/link';
import styles from './adminPanel.module.css';
import { MdAdminPanelSettings } from 'react-icons/md';

const AdminPanel = () => {
  return (
    <div>
      <h1 className={styles.adminPanelTitle}>Admin panel</h1>
      <ul className={styles.adminPanelList}>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/profile">
            Profile
          </Link>
        </li>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/edit-portfolio">
            Edit Portfolio
          </Link>
        </li>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/profile">
            Edit About
          </Link>
        </li>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/profile">
            Edit Contact
          </Link>
        </li>
        <li className={styles.adminPanelItem}>
          <Link className={styles.adminPanelLink} href="/admin/profile">
            User List
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
