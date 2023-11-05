import DynamicPagePortfolioContent from '@/src/components/Portfolio/DynamicPagePortfolioContent/DynamicPagePortfolioContent';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import { getAllPortfolioForDinamycPage } from '@/src/actions/portfolioActions';

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  const { portfolios } = await getAllPortfolioForDinamycPage();

  const portfolioItem = portfolios.find((item) => item._id === id);

  return {
    title: portfolioItem.title,
    description: `${portfolioItem.description}`,
    alternates: {
      canonical: `/portfolio/${id}`,
      languages: {
        'en-US': `/en-US/portfolio/${id}`,
        'de-DE': `/de-DE/portfolio/${id}`,
      },
    },
    openGraph: {
      title: `My Site Portfolio ${portfolioItem.title} | Dmitriy Ushkvarok`,
      description:
        'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
      images: [
        {
          url: portfolioItem.image,
          width: 400,
          height: 300,
        },
      ],
      type: 'website',
      siteName: 'Dmitriy Ushkvarok My Site Portfolio',
    },
  };
}

const CollectionSite = ({ params: { id } }) => {
  return (
    <>
      <div>
        <PageTransition>
          <h1 className="hiddenTitle">Dynamic Portfolio Page</h1>
          <DynamicPagePortfolioContent id={id} />
        </PageTransition>
      </div>
    </>
  );
};

export default CollectionSite;
