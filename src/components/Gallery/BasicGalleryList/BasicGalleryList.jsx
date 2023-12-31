'use client';
import Image from 'next/image';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Modal from 'react-modal';
import styles from './basicGalleryList.module.css';
import { fredericka } from '@/src/app/fonts';

const BasicGalleryList = ({ photos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const galleryImages = photos.map((item) => ({
    original: item.secure_url,
    thumbnail: item.secure_url,
    description: 'Photo admin',
  }));

  return (
    <div className={(styles.galleryContainer, fredericka.className)}>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <ul className={styles.imageList}>
        {photos?.map((item, index) => (
          <li
            key={item?.public_id}
            onClick={() => openModal(index)}
            className={styles.imageItem}
          >
            <Image
              src={item?.secure_url}
              alt="photo admin"
              width={400}
              height={500}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <ImageGallery
          items={galleryImages}
          startIndex={selectedImageIndex}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={true}
          disableSwipe={false}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
};

export default BasicGalleryList;
