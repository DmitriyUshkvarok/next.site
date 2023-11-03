import PageTransition from '@/src/components/PageTransition/PageTransition';
import { getAllPortfolio } from '@/src/actions/portfolioActions';
import { fredericka } from '@/src/app/fonts';
import Container from '@/src/components/Container/Container';
import PortfolioList from '@/src/components/Portfolio/PortfoliioList/PortfolioList';
import styles from './portfolio.module.css';

export const metadata = {
  title: 'Portfolio Page | My Site Portfolio Portfolio',
  description:
    'web developer Dmitriy Ushkvarok,welcome to my portfolio page Dmitriy Ushkvarok',
  alternates: {
    canonical: '/portfolio',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const Portfolio = async () => {
  const searchParams = {
    limit: 12,
    page: 1,
    skip: 0,
  };
  const { portfolios, totalPages } = await getAllPortfolio(searchParams);

  return (
    <>
      <div className={fredericka.className}>
        <PageTransition>
          <h1 className="hiddenTitle">Portfolio Page</h1>
          <Container>
            <h2 className={styles.selectTitle}>Choose a gallery</h2>
            <PortfolioList portfolios={portfolios} totalPages={totalPages} />
          </Container>
        </PageTransition>
      </div>
    </>
  );
};

export default Portfolio;
