'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import styles from './usrPanel.module.css';
import { fredericka } from '@/src/app/fonts';

const UserPanel = () => {
  const { data: session } = useSession();
  return (
    <div className={fredericka.className}>
      <h2 className={styles.userPanelTitle}>User Panel</h2>
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
            blurDataURL={
              session?.user?.image ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDX326p2qgkC1VI2N1jm1u_Ihb2PAM8MecsWOJfIBSESk_GmadQUf4INIVkBpzvut48&usqp=CAU'
            }
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
    </div>
  );
};

export default UserPanel;
