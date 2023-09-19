'use client';

import { signOut } from 'next-auth/react';

const LogOut = () => {
  return (
    <>
      <button
        style={{
          color: 'aqua',
          backgroundColor: 'transparent',
          border: 'none',
        }}
        type="button"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Logout
      </button>
    </>
  );
};

export default LogOut;
