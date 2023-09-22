import PageTransition from '../components/PageTransition/PageTransition.jsx';
import HomeContent from '../components/HomeContent/HomeContent.jsx';

export default function Home() {
  return (
    <>
      <PageTransition>
        <HomeContent />
      </PageTransition>
    </>
  );
}
