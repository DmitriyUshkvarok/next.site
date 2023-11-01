import { getAllUsers } from '@/src/actions/authActions';
import AdminUserList from '@/src/components/Admin/AdminUserList/AdminUserList';

const EditUsersPage = async () => {
  const { users } = await getAllUsers();
  return (
    <>
      <h1 className="hiddenTitle">Admin Edit User</h1>
      <AdminUserList users={users} />
    </>
  );
};

export default EditUsersPage;
