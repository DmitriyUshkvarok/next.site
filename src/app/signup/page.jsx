import FormRegistration from '@/src/components/AuthForm/FormRegistration/FormRegistration';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Container from '@/src/components/Container/Container';

const SignUp = () => {
  return (
    <>
      <PageTransition>
        <Container>
          <FormRegistration />
        </Container>
      </PageTransition>
    </>
  );
};

export default SignUp;
