import DynamicPagePortfolioContent from '@/src/components/DynamicPagePortfolioContent/DynamicPagePortfolioContent';
import { fredericka } from '@/src/app/fonts';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const CollectionSite = ({ params: { id } }) => {
  return (
    <div className={fredericka.className}>
      <PageTransition>
        <DynamicPagePortfolioContent id={id} />
      </PageTransition>
    </div>
  );
};

export default CollectionSite;
