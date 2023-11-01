'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/Admin/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/Auth/UpdateUserForm/UpdateUserForm';
import ChangePassword from '@/src/components/Auth/ChangePassword/ChangePassword';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import { fredericka } from '../fonts';
import styles from './profile.module.css';
import Container from '@/src/components/Container/Container';

const UserProfile = () => {
  const { data: session, update } = useSession();

  return (
    <div className={fredericka.className}>
      <PageTransition>
        <Container>
          <h1 className="hiddenTitle">Profile Page</h1>
          <div className={styles.componentProfileWrapper}>
            <div>
              <UserPanel />
            </div>
            <div>
              <UpdateUserForm update={update} />
            </div>
            <div>
              {session?.user?.provider === 'credentials' && <ChangePassword />}
            </div>
          </div>
        </Container>
      </PageTransition>
    </div>
  );
};

export default UserProfile;
