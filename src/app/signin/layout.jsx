import LogInForm from '@/src/components/AuthForm/FormLogin/FormLogin';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const LogInLayout = ({ children }) => {
  return (
    <>
      <PageTransition>
        <LogInForm />
        <div> {children}</div>
      </PageTransition>
    </>
  );
};

export default LogInLayout;
