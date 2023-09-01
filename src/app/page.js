import LogInForm from '../components/AuthForm/FormLogin/FormLogin';
import PageTransition from '../components/PageTransition/PageTransition';
import HomeContent from '../components/HomeContent/HomeContent';

export default function Home() {
  return (
    <>
      <PageTransition>
        <HomeContent />
        {/* <LogInForm /> */}
      </PageTransition>
    </>
  );
}
