import PageTransition from '@/src/components/PageTransition/PageTransition';
import { getAllPortfolio } from '@/src/actions/portfolioActions';
import { fredericka } from '@/src/app/fonts';
import Container from '@/src/components/Container/Container';
import PortfolioList from '@/src/components/PortfoliioList/PortfolioList';
import styles from './portfolio.module.css';

const Portfolio = async () => {
  const searchParams = {
    limit: 12,
    page: 1, 
    skip: 0, 
  };
  const { portfolios, totalPages } = await getAllPortfolio(searchParams);

  return (
    <div className={fredericka.className}>
      <PageTransition>
        <Container>
          <h1 className={styles.selectTitle}>Choose a gallery</h1>
          <PortfolioList portfolios={portfolios} totalPages={totalPages} />
        </Container>
      </PageTransition>
    </div>
  );
};

export default Portfolio;
