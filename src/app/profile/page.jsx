'use client';
import { useSession } from 'next-auth/react';
import UserPanel from '@/src/components/Admin/UserPanel/UserPanel';
import UpdateUserForm from '@/src/components/Auth/UpdateUserForm/UpdateUserForm';
import ChangePassword from '@/src/components/Auth/ChangePassword/ChangePassword';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import { fredericka } from '../fonts';
import styles from './profile.module.css';
import Container from '@/src/components/Container/Container';

export const metadata = {
  title: 'Profile Page | My Site Portfolio Profile',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
  alternates: {
    canonical: '/portfolio',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const UserProfile = () => {
  const { data: session, update } = useSession();

  return (
    <>
      <div className={fredericka.className}>
        <PageTransition>
          <h1 className="hiddenTitle">Profile Page</h1>
          <Container>
            <div className={styles.componentProfileWrapper}>
              <div>
                <UserPanel />
              </div>
              <div>
                <UpdateUserForm update={update} />
              </div>
              <div>
                {session?.user?.provider === 'credentials' && (
                  <ChangePassword />
                )}
              </div>
            </div>
          </Container>
        </PageTransition>
      </div>
    </>
  );
};

export default UserProfile;
