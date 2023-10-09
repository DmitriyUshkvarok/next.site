import Image from 'next/image';
import AdminGalleryList from '../AdminGalleryList/AdminGalleryList';
const AdminAllGalleryPhoto = ({ photos }) => {
  return (
    <>
      {photos.map((item) => (
        <AdminGalleryList key={item?.public_id} url={item?.secure_url} />
      ))}
    </>
  );
};

export default AdminAllGalleryPhoto;
