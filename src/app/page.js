import PageTransition from '../components/PageTransition/PageTransition.jsx';
import HomeContent from '../components/HomeContent/HomeContent.jsx';

export const metadata = {
  title: 'Home Page | My site Portfolio',
  description:
    'web developer Dmitriy Ushkvarok,Welcome to my site Web Developer Dmitriy Ushkvarok',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

export default function Home() {
  return (
    <>
      <PageTransition>
        <h1 className="hiddenTitle">
          Welcome Page incudes base info,stack techology and opportunity
          download sertificate and resume
        </h1>
        <HomeContent />
      </PageTransition>
    </>
  );
}
