import AdminAboutWorkItem from '../AdminAboutWorkItem/AdminAboutWorkItem';
import styles from './AdminWorkList.module.css';

const AdminAboutWorkList = ({ works }) => {
  return (
    <ul className={styles.adminAboutWorkList}>
      <AdminAboutWorkItem works={works} />
    </ul>
  );
};

export default AdminAboutWorkList;
