import dynamic from 'next/dynamic';
import DynamicPagePortfolioContent from '@/src/components/DynamicPagePortfolioContent/DynamicPagePortfolioContent';

const PageTransition = dynamic(() =>
  import('@/src/components/PageTransition/PageTransition')
);

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
