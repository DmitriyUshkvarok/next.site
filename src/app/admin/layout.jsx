import AdminPanel from '@/src/components/AdminPanel/AdminPanel';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ marginTop: '110px' }}>
      <AdminPanel />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
