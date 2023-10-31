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
        <h1 className="hiddenTitle">Admin Page</h1>
        <div className={styles.adminIconHome}>
          <GrSettingsOption className={styles.adminIcon} size={300} />
        </div>
      </PageTransition>
    </>
  );
};

export default Admin;
