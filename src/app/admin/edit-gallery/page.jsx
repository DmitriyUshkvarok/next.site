import UploadForm from '@/src/components/UploadForm/UploadForm';
import { getAllPhotos } from '@/src/actions/uploadActions';
import AdminAllGalleryPhoto from '@/src/components/AdminAllGalleryPhoto/AdminAllGalleryPhoto';

const EditGalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      <UploadForm />
      <AdminAllGalleryPhoto photos={photos || []} />
    </>
  );
};

export default EditGalleryPage;
