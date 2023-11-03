import ButtonBack from '@/src/components/Buttons/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import BasicGalleryList from '@/src/components/Gallery/BasicGalleryList/BasicGalleryList';
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
    },
  },
};

const GalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      {/* <PageTransition> */}
      <h1 className="hiddenTitle">Gallery Page</h1>
      <div style={{ marginTop: '130px' }}></div>
      <ButtonBack />
      <BasicGalleryList photos={photos} />
      {/* </PageTransition> */}
    </>
  );
};

export default GalleryPage;
