import PortfolioForm from '@/src/components/Admin/AdminPortfolioForm/AdminPortfolioForm';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import AdminPortfolioList from '@/src/components/Admin/AdminPortfolioList/AdminPortfolioList';

const EditPortfolio = () => {
  return (
    <>
      <PageTransition>
        <h1 className="hiddenTitle">Admin Edit Portfolio</h1>
        <PortfolioForm />
        <AdminPortfolioList />
      </PageTransition>
    </>
  );
};

export default EditPortfolio;
