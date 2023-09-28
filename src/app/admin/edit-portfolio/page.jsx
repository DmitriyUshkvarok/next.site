import PortfolioForm from '@/src/components/AdminPortfolioForm/AdminPortfolioForm';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import AdminPortfolioList from '@/src/components/AdminPortfolioList/AdminPortfolioList';

const EditPortfolio = () => {
  return (
    <>
      <PageTransition>
        <PortfolioForm />
        <AdminPortfolioList />
      </PageTransition>
    </>
  );
};

export default EditPortfolio;
