import { items } from './data';
import Image from 'next/image';
import Link from 'next/link';
import ButtonBack from '../ButtonBack/ButtonBack';
import styles from './DynamicPagePortfolioContent.module.css';

const DynamicPagePortfolioContent = ({ id }) => {
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <div className={styles.btnBackWrapper}>
        <ButtonBack />
      </div>
      <h2 className={styles.dynamicPageTitle}>{item.title}</h2>
      <div className={styles.dynamicPageImgWrapper}>
        <Image
          src={item.image}
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
            {item.pageCode}
          </Link>
        </div>
      </div>
    </>
  );
};

export default DynamicPagePortfolioContent;