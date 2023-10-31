'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/AuthForm/UpdateUserForm/UpdateUserForm';
import ChangePassword from '@/src/components/AuthForm/ChangePassword/ChangePassword';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const UserAdmimProfile = () => {
  const { data: session, update } = useSession();
  return (
    <div style={{ marginTop: '50px' }}>
      <PageTransition>
        <UserPanel />
        <UpdateUserForm update={update} />
        {session?.user?.provider === 'credentials' && <ChangePassword />}
      </PageTransition>
    </div>
  );
};

export default UserAdmimProfile;
