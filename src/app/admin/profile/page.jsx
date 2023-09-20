'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/UpdateUserForm/UpdateUserForm/UpdateUserForm';
import ChangePassword from '@/src/components/AuthForm/ChangePassword/ChangePassword';

const UserProfile = () => {
  const { data: session, update } = useSession();
  return (
    <div style={{ marginTop: '150px' }}>
      <UserPanel />
      <UpdateUserForm update={update} />
      {session?.user?.provider === 'credentials' && <ChangePassword />}
    </div>
  );
};

export default UserProfile;
