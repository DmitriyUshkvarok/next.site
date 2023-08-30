import LogInForm from '../components/AuthForm/FormLogin/FormLogin';
import PageTransition from '../components/PageTransition/PageTransition';

export default function Home() {
  return (
    <>
      <PageTransition>
        <h2>Welcome to my next js project</h2>
        <LogInForm />
      </PageTransition>
    </>
  );
}
