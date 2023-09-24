import PortfolioForm from '@/src/components/AdminPortfolio/AdminPortfolio';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const EditPortfolio = () => {
  return (
    <>
      <PageTransition>
        <PortfolioForm />
      </PageTransition>
    </>
  );
};

export default EditPortfolio;
