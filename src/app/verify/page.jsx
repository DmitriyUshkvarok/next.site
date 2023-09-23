import { verifyWithCredentials } from '@/src/actions/authActions';
import Link from 'next/link';

const Verify = async ({ searchParams: { token } }) => {
  const res = await verifyWithCredentials(token);
  return (
    <div style={{ marginTop: '140px' }}>
      {res?.msg}
      <p>теперь можете войти в свою учётную запись используя емейл и пароль</p>
      <Link href="signin">
        Войти со своего аккаунта используя емейл и пароль
      </Link>
    </div>
  );
};

export default Verify;
