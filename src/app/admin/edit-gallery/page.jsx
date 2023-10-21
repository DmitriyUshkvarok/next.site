import UploadForm from '@/src/components/UploadForm/UploadForm';
import { getAllPhotos } from '@/src/actions/uploadActions';
import AdminAllGalleryPhoto from '@/src/components/AdminAllGalleryPhoto/AdminAllGalleryPhoto';
import styles from './editGallery.module.css';

const EditGalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      <div className={styles.uploadFormWrapper}>
        <UploadForm />
      </div>
      <div>
        <AdminAllGalleryPhoto photos={photos} />
      </div>
    </>
  );
};

export default EditGalleryPage;
