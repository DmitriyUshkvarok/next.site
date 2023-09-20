import PortfolioForm from '@/src/components/AdminPortfolio/AdminPortfolio';
import Link from 'next/link';

const Admin = () => {
  return (
    <>
      <Link
        href="/admin/profile"
        style={{ marginTop: '160px', display: 'flex' }}
      >
        User Profile
      </Link>
      <PortfolioForm />
    </>
  );
};

export default Admin;
