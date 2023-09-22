import FormRegistration from '@/src/components/AuthForm/FormRegistration/FormRegistration';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const SignUp = () => {
  return (
    <>
      <PageTransition>
        <FormRegistration />
      </PageTransition>
    </>
  );
};

export default SignUp;
