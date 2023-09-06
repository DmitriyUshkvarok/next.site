import Link from 'next/link';
import Image from 'next/image';
import { items } from '../../components/DynamicPagePortfolioContent/data';
import styles from './portfolio.module.css';
// import PrivatRoute from '@/src/components/PrivateRoute/PrivatRoute';
import dynamic from 'next/dynamic';

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

const Portfolio = () => {
  return (
    <>
      {/* <PrivatRoute> */}
      <PageTransition>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <ul className={styles.portfolioList}>
          {items.map((item) => (
            <li key={item.id} className={styles.portfolioListItem}>
              <Link
                href={`/portfolio/${item.id}`}
                className={styles.portfolioListLink}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className={styles.portfolioImg}
                />
              </Link>
            </li>
          ))}
        </ul>
      </PageTransition>
      {/* </PrivatRoute> */}
    </>
  );
};

export default Portfolio;
