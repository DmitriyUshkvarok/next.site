'use client';
import styles from './adminPortfolioList.module.css';
import AdminPortfolioItem from '../AdminPortfolioItem/AdminPortfolioItem';
import { fredericka } from '@/src/app/fonts';

const AdminPortfolioList = () => {
  return (
    <div className={fredericka.className}>
      <h3 className={styles.adminPortfolioListTitle}>
        Edit admin portfolio list
      </h3>
      <div className={styles.adminPortfolioListWrapper}>
        <AdminPortfolioItem />
      </div>
    </div>
  );
};

export default AdminPortfolioList;
