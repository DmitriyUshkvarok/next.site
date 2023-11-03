import ButtonBack from '@/src/components/Buttons/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import BasicGalleryList from '@/src/components/Gallery/BasicGalleryList/BasicGalleryList';
import { getAllPhotos } from '@/src/actions/uploadActions';

export const metadata = {
  title: 'Gallery Page | My Site Portfolio Gallery',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
  alternates: {
    canonical: '/gallery',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const GalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      <PageTransition>
        <h1 className="hiddenTitle">Gallery Page</h1>
        <div style={{ marginTop: '130px' }}></div>
        <ButtonBack />
        <BasicGalleryList photos={photos} />
      </PageTransition>
    </>
  );
};

export default GalleryPage;
