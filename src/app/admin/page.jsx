import PageTransition from '@/src/components/PageTransition/PageTransition';
import { GrSettingsOption } from 'react-icons/gr';
import styles from './adminHome.module.css';

export const metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const Admin = () => {
  return (
    <>
      <PageTransition>
        <div className={styles.adminIconHome}>
          <GrSettingsOption
            className={styles.adminIcon}
            size={300}
            style={{ color: 'black' }}
          />
        </div>
      </PageTransition>
    </>
  );
};

export default Admin;
