'use client';
import styles from './adminPortfolioList.module.css';
import AdminPortfolioItem from '../AdminPortfolioItem/AdminPortfolioItem';

const AdminPortfolioList = () => {
  return (
    <>
      <h3 className={styles.adminPortfolioListTitle}>
        Edit admin portfolio list
      </h3>
      <div className={styles.adminPortfolioListWrapper}>
        <AdminPortfolioItem />
      </div>
    </>
  );
};

export default AdminPortfolioList;
