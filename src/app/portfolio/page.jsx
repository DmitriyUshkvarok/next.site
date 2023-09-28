import Link from 'next/link';
import Image from 'next/image';
import styles from './portfolio.module.css';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import { getAllPortfolio } from '@/src/actions/portfolioActions';
import { fredericka } from '@/src/app/fonts';
import { items } from '@/src/components/DynamicPagePortfolioContent/data';

const Portfolio = async () => {
  const { portfolios } = await getAllPortfolio();

  return (
    <div className={fredericka.className}>
      <PageTransition>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <ul className={styles.portfolioList}>
          {portfolios?.map((item) => (
            <li key={item._id} className={styles.portfolioListItem}>
              <h2 className={styles.portfolioListItemTitle}>{item.title}</h2>
              <Link
                href={`/portfolio/${item._id}`}
                className={styles.portfolioListLink}
              >
                <Image
                  src={
                    items.find((localItem) => localItem.id === item._id)
                      ?.image || item.image
                  }
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
    </div>
  );
};

export default Portfolio;
