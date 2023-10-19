import Image from 'next/image';
import Link from 'next/link';
import ButtonBack from '../ButtonBack/ButtonBack';
import styles from './DynamicPagePortfolioContent.module.css';
import { getAllPortfolio } from '@/src/actions/portfolioActions';
import { items } from './data';
import CommentsPortfolio from '../CommentsPortfolio/CommentsPortfolio';
import Container from '../Container/Container';

const DynamicPagePortfolioContent = async ({ id }) => {
  const searchParams = {
    limit: 1,
  };
  const { portfolios } = await getAllPortfolio(searchParams);

  const item = portfolios.find((item) => item._id === id);

  const localItem = items.find((localItem) => localItem.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <Container>
        <div className={styles.btnBackWrapper}>
          <ButtonBack />
        </div>
        <h2 className={styles.dynamicPageTitle}>{item.title}</h2>
        <div className={styles.dynamicPageImgWrapper}>
          <Image
            src={localItem ? localItem.image : item.image}
            alt={item.title}
            width={600}
            height={500}
            className={styles.dynamicPageImage}
          />
        </div>
        <div className={styles.dynamicPageInfo}>
          <p className={styles.dynamicPageDescription}>{item.description}</p>
          <div className={styles.dynamicPageLinkWrapper}>
            <Link
              href={item.website}
              target="_blank"
              className={styles.dynamicPageLink}
            >
              website
            </Link>
            <Link
              href={item.pageCode}
              target="_blank"
              className={styles.dynamicPageLink}
            >
              live code
            </Link>
          </div>
        </div>
        <CommentsPortfolio postId={id} />
      </Container>
    </>
  );
};

export default DynamicPagePortfolioContent;
