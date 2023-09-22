import PortfolioForm from '@/src/components/AdminPortfolio/AdminPortfolio';
import Link from 'next/link';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const Admin = () => {
  return (
    <>
      <PageTransition>
        <Link
          href="/admin/profile"
          style={{ marginTop: '160px', display: 'flex' }}
        >
          User Profile
        </Link>
        <PortfolioForm />
      </PageTransition>
    </>
  );
};

export default Admin;
