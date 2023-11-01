import DynamicPagePortfolioContent from '@/src/components/Portfolio/DynamicPagePortfolioContent/DynamicPagePortfolioContent';
import { fredericka } from '@/src/app/fonts';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const CollectionSite = ({ params: { id } }) => {
  return (
    <>
      <h1 className="hiddenTitle">Dynamic Portfolio Page</h1>
      <div className={fredericka.className}>
        <PageTransition>
          <DynamicPagePortfolioContent id={id} />
        </PageTransition>
      </div>
    </>
  );
};

export default CollectionSite;
