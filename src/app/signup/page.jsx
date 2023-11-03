import FormRegistration from '@/src/components/Auth/FormRegistration/FormRegistration';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Container from '@/src/components/Container/Container';

export const metadata = {
  title: 'Sign Up Page | My Site Portfolio SignUp',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
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
      <h1 className="hiddenTitle">Registration Page</h1>
      <PageTransition>
        <Container>
          <FormRegistration />
        </Container>
      </PageTransition>
    </>
  );
};

export default SignUp;
