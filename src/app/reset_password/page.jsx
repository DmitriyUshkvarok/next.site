import ResetPasswordComponent from '@/src/components/AuthForm/ResetPassword/ResetPassword';

const ResetPasswordPage = ({ searchParams: { token } }) => {
  return (
    <>
      <h1 className="hiddenTitle">Reset Password Page</h1>
      <ResetPasswordComponent token={token} />
    </>
  );
};

export default ResetPasswordPage;
