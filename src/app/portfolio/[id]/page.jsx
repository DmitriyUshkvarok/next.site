import DynamicPagePortfolioContent from '@/src/components/Portfolio/DynamicPagePortfolioContent/DynamicPagePortfolioContent';
import { fredericka } from '@/src/app/fonts';
import PageTransition from '@/src/components/PageTransition/PageTransition';

export const metadata = {
  title: 'Portfolio Dynamic Page | My Site Portfolio Dynamic Portfolio',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
  alternates: {
    canonical: '/portfolio',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const CollectionSite = ({ params: { id } }) => {
  return (
    <>
      <div className={fredericka.className}>
        <PageTransition>
          <h1 className="hiddenTitle">Dynamic Portfolio Page</h1>
          <DynamicPagePortfolioContent id={id} />
        </PageTransition>
      </div>
    </>
  );
};

export default CollectionSite;
