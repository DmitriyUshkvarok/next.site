'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import styles from './usrPanel.module.css';

const UserPanel = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1 className={styles.userPanelTitle}>User Panel</h1>
      <div className={styles.userPanelBox}>
        <div className={styles.avatarWrapper}>
          <Image
            className={styles.userPanelBoxAvatar}
            src={
              session?.user?.image ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDX326p2qgkC1VI2N1jm1u_Ihb2PAM8MecsWOJfIBSESk_GmadQUf4INIVkBpzvut48&usqp=CAU'
            }
            alt={session?.user?.name || 'user name'}
            width={50}
            height={50}
          />
        </div>
        <p className={styles.userPanelBoxName}>
          <span className={styles.userPanelBoxNameSpan}>Name: </span>
          {session?.user?.name}
        </p>
        <p className={styles.userPanelBoxEmail}>
          <span className={styles.userPanelBoxNameSpan}>Email: </span>
          {session?.user?.email}
        </p>
      </div>
    </>
  );
};

export default UserPanel;
