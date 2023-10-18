'use client';
import styles from './adminPortfolioList.module.css';
import AdminPortfolioItem from '../AdminPortfolioItem/AdminPortfolioItem';
import { useState, useEffect } from 'react';
import { getAllPortfolio } from '@/src/actions/portfolioActions';

const AdminPortfolioList = () => {
  return (
    <>
      <h3 className={styles.adminPortfolioListTitle}>
        Edit admin portfolio list
      </h3>
      <ul className={styles.adminPortfolioList}>
        <AdminPortfolioItem />
      </ul>
    </>
  );
};

export default AdminPortfolioList;
