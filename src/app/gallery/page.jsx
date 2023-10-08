import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const GalleryPage = () => {
  return (
    <>
      <PageTransition>
        <div style={{ marginTop: '130px' }}>Gallery</div>
        <ButtonBack />
      </PageTransition>
    </>
  );
};

export default GalleryPage;
