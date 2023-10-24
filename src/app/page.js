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
      'ru-RU': '/ru-RU',
    },
  },
};

export default function Home() {
  return (
    <>
      <PageTransition>
        <HomeContent />
      </PageTransition>
    </>
  );
}
