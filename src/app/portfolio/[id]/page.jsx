import DynamicPagePortfolioContent from '@/src/components/DynamicPagePortfolioContent/DynamicPagePortfolioContent';

import PageTransition from '@/src/components/PageTransition/PageTransition';

const CollectionSite = ({ params: { id } }) => {
  return (
    <>
      <PageTransition>
        <DynamicPagePortfolioContent id={id} />
      </PageTransition>
    </>
  );
};

export default CollectionSite;
