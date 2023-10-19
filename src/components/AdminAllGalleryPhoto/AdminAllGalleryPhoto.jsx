'use client';
import AdminGalleryList from '../AdminGalleryList/AdminGalleryList';
import { deletePhoto } from '@/src/actions/uploadActions';
import { useState } from 'react';
import styles from './AdminGalleryPhoto.module.css';

const AdminAllGalleryPhoto = ({ photos }) => {
  const [isPendings, setIsPendings] = useState({});

  const handleDeletePhoto = async (public_id) => {
    try {
      setIsPendings((prevState) => ({
        ...prevState,
        [public_id]: true,
      }));

      await deletePhoto(public_id);

      setIsPendings((prevState) => ({
        ...prevState,
        [public_id]: false,
      }));
    } catch (error) {
      setIsPendings((prevState) => ({
        ...prevState,
        [public_id]: false,
      }));
    } finally {
      setIsPendings((prevState) => ({
        ...prevState,
        [public_id]: false,
      }));
    }
  };

  return (
    <div className={styles.adminGalleryList}>
      {photos.map((item) => (
        <AdminGalleryList
          key={item?.public_id}
          url={item?.secure_url}
          onClick={() => handleDeletePhoto(item?.public_id)}
          isPending={isPendings[item?.public_id]}
        />
      ))}
    </div>
  );
};

export default AdminAllGalleryPhoto;
