import PageTransition from '../components/PageTransition/PageTransition.jsx';
import HomeContent from '../components/Home/HomeContent/HomeContent.jsx';

export const metadata = {
  title: 'Home Page | My site Portfolio',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects.',
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
        <h1 className="hiddenTitle">Home Page</h1>
        <HomeContent />
      </PageTransition>
    </>
  );
}
