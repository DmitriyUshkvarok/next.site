import PageTransition from '@/src/components/PageTransition/PageTransition';
import { getAllPortfolio } from '@/src/actions/portfolioActions';
import { fredericka } from '@/src/app/fonts';
import Container from '@/src/components/Container/Container';
import PortfolioList from '@/src/components/PortfoliioList/PortfolioList';
import styles from './portfolio.module.css';

const Portfolio = async () => {
  const { portfolios } = await getAllPortfolio();

  return (
    <div className={fredericka.className}>
      <PageTransition>
        <Container>
          <h1 className={styles.selectTitle}>Choose a gallery</h1>
          <PortfolioList portfolios={portfolios} />
        </Container>
      </PageTransition>
    </div>
  );
};

export default Portfolio;
