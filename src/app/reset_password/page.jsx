import ResetPasswordComponent from '@/src/components/AuthForm/ResetPassword/ResetPassword';

const ResetPasswordPage = ({ searchParams: { token } }) => {
  return (
    <>
      <ResetPasswordComponent token={token} />
    </>
  );
};

export default ResetPasswordPage;
