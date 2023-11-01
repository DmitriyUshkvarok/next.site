import AdminPanel from '@/src/components/Admin/AdminPanel/AdminPanel';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ marginTop: '110px', marginBottom: '70px' }}>
      <AdminPanel />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
