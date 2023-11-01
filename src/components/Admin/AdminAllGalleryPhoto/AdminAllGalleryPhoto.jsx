'use client';
import { deletePhoto } from '@/src/actions/uploadActions';
import { useState } from 'react';
import styles from './AdminGalleryPhoto.module.css';
import { AiFillDelete } from 'react-icons/ai';
import Image from 'next/image';

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
      {photos?.map((item) => (
        <div key={item?.public_id} className={styles.galleryItem}>
          <Image
            src={item?.secure_url}
            alt="upload Image"
            width={150}
            height={150}
            sizes="(max-width: 480px) 25vw ,(max-width: 768px) 50vw ,75vw"
          />
          <div>
            <button
              type="button"
              onClick={() => handleDeletePhoto(item?.public_id)}
              className={styles.adminGalleryBtnDelete}
            >
              {isPendings[item?.public_id] ? (
                'Deleting...'
              ) : (
                <AiFillDelete size={20} color="red" />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminAllGalleryPhoto;
