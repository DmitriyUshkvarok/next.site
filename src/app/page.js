import PageTransition from '../components/PageTransition/PageTransition.jsx';
import HomeContent from '../components/HomeContent/HomeContent.jsx';
import Header from '../components/Header/Header.jsx';

export default function Home() {
  return (
    <>
      <PageTransition>
        <Header />
        <HomeContent />
      </PageTransition>
    </>
  );
}
