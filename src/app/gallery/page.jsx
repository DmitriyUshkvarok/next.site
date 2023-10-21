import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import BasicGalleryList from '@/src/components/BasicGalleryList/BasicGalleryList';

const GalleryPage = () => {
  return (
    <>
      <PageTransition>
        <div style={{ marginTop: '130px' }}></div>
        <ButtonBack />
        <BasicGalleryList />
      </PageTransition>
    </>
  );
};

export default GalleryPage;
