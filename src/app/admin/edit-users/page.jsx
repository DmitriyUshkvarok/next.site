import { getAllUsers } from '@/src/actions/authActions';
import AdminUserList from '@/src/components/AdminUserList/AdminUserList';

const EditUsersPage = async () => {
  const { users } = await getAllUsers();
  return (
    <>
      <AdminUserList users={users} />
    </>
  );
};

export default EditUsersPage;
