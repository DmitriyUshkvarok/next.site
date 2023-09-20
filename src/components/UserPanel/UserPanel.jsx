'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const UserPanel = () => {
  const { data: session } = useSession();
  return (
    <div style={{ display: 'flex' }}>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <Image
        src={
          session?.user?.image ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDX326p2qgkC1VI2N1jm1u_Ihb2PAM8MecsWOJfIBSESk_GmadQUf4INIVkBpzvut48&usqp=CAU'
        }
        alt={session?.user?.name || 'user name'}
        width={50}
        height={50}
      />
    </div>
  );
};

export default UserPanel;
