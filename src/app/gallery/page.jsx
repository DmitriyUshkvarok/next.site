import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import BasicGalleryList from '@/src/components/BasicGalleryList/BasicGalleryList';
import { getAllPhotos } from '@/src/actions/uploadActions';

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
