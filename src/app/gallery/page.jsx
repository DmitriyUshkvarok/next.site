import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import BasicGalleryList from '@/src/components/BasicGalleryList/BasicGalleryList';
import { getAllPhotos } from '@/src/actions/uploadActions';

export const metadata = {
  title: 'Gallery Page | My Site Portfolio Gallery',
  description:
    'web developer Dmitriy Ushkvarok,welcome to my gallery page Dmitriy Ushkvarok',
  alternates: {
    canonical: '/gallery',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
      'ru-RU': '/ru-RU',
    },
  },
};

const GalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      <PageTransition>
        <div style={{ marginTop: '130px' }}></div>
        <ButtonBack />
        <BasicGalleryList photos={photos} />
      </PageTransition>
    </>
  );
};

export default GalleryPage;
