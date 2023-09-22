import LogInForm from '@/src/components/AuthForm/FormLogin/FormLogin';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const SignIn = () => {
  return (
    <>
      <PageTransition>
        <LogInForm />
      </PageTransition>
    </>
  );
};

export default SignIn;
