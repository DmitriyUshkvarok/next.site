'use client';
import Image from 'next/image';
import styles from './AdminGalleryList.module.css';
import { AiFillDelete } from 'react-icons/ai';

const AdminGalleryList = ({ url, onClick, isPending }) => {
  return (
    <>
      <div className={styles.adminGalleryWrapper}>
        <div>
          <Image
            src={url}
            alt="upload Image"
            width={150}
            height={150}
            sizes="100vh"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={onClick}
            className={styles.adminGalleryBtnDelete}
          >
            {isPending ? 'Deleting...' : <AiFillDelete size={20} color="red" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminGalleryList;
