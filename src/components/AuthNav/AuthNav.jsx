'use server';
import { getServerSession } from 'next-auth/next';
import { authOption } from '@/src/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import LogOut from '../AuthForm/LogOut/LogOut';

const AuthNav = async () => {
  const session = await getServerSession(authOption);
  return (
    <div>
      {session ? (
        <>
          <Link href="/admin" style={{ color: 'aqua' }}>
            Admin
          </Link>
          <LogOut />
        </>
      ) : (
        <>
          <Link href="/signin" style={{ color: 'aqua' }}>
            SignIn
          </Link>
          <Link href="/signup" style={{ color: 'aqua' }}>
            Registration
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthNav;
