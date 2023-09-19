'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/UpdateUserForm/UpdateUserForm/UpdateUserForm';

const UserProfile = () => {
  const { data: session, update } = useSession();
  return (
    <div style={{ marginTop: '90px' }}>
      <UserPanel />
      <UpdateUserForm update={update} />
    </div>
  );
};

export default UserProfile;
