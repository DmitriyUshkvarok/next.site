import { getAllPortfolio } from '@/src/actions/portfolioActions';
import styles from './adminPortfolioList.module.css';
import AdminPortfolioItem from '../AdminPortfolioItem/AdminPortfolioItem';

const AdminPortfolioList = async () => {
  const { portfolios } = await getAllPortfolio();
  return (
    <>
      <h3 className={styles.adminPortfolioListTitle}>
        Edit admin portfolio list
      </h3>
      <ul className={styles.adminPortfolioList}>
        <AdminPortfolioItem portfolios={portfolios} />
      </ul>
    </>
  );
};

export default AdminPortfolioList;
