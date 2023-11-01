import UploadForm from '@/src/components/Admin/UploadForm/UploadForm';
import { getAllPhotos } from '@/src/actions/uploadActions';
import AdminAllGalleryPhoto from '@/src/components/Admin/AdminAllGalleryPhoto/AdminAllGalleryPhoto';
import styles from './editGallery.module.css';

const EditGalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <>
      <div className={styles.uploadFormWrapper}>
        <h1 className="hiddenTitle">Admin Edit Gallery</h1>
        <UploadForm />
      </div>
      <div>
        <AdminAllGalleryPhoto photos={photos} />
      </div>
    </>
  );
};

export default EditGalleryPage;
