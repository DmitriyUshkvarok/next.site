import FormRegistration from '@/src/components/Auth/FormRegistration/FormRegistration';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Container from '@/src/components/Container/Container';

export const metadata = {
  title: 'Sign Up Page | My Site Portfolio SignUp',
  description:
    'web developer Dmitriy Ushkvarok,welcome to my SignUp page Dmitriy Ushkvarok',
  alternates: {
    canonical: '/signup',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const SignUp = () => {
  return (
    <>
      <PageTransition>
        <Container>
          <h1 className="hiddenTitle">Registration Page</h1>
          <FormRegistration />
        </Container>
      </PageTransition>
    </>
  );
};

export default SignUp;
