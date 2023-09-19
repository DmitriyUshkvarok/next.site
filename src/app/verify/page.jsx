import { verifyWithCredentials } from '@/src/actions/authActions';

const Verify = async ({ searchParams: { token } }) => {
  const res = await verifyWithCredentials(token);
  return <div></div>;
};

export default Verify;
