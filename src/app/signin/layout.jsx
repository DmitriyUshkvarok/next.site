import LogInForm from '@/src/components/AuthForm/FormLogin/FormLogin';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Container from '@/src/components/Container/Container';

const LogInLayout = ({ children }) => {
  return (
    <>
      <PageTransition>
        <Container>
          <LogInForm />
          <div> {children}</div>
        </Container>
      </PageTransition>
    </>
  );
};

export default LogInLayout;
