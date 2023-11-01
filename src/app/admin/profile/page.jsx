'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/Admin/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/Auth/UpdateUserForm/UpdateUserForm';
import ChangePassword from '@/src/components/Auth/ChangePassword/ChangePassword';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const UserAdmimProfile = () => {
  const { data: session, update } = useSession();
  return (
    <div style={{ marginTop: '50px' }}>
      <PageTransition>
        <h1 className="hiddenTitle">Profile Page</h1>
        <UserPanel />
        <UpdateUserForm update={update} />
        {session?.user?.provider === 'credentials' && <ChangePassword />}
      </PageTransition>
    </div>
  );
};

export default UserAdmimProfile;
