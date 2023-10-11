'use client';
import { useState } from 'react';
import styles from './UnderConstructionModal.module.css';

const UnderConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.underConstructionModal} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2 className={styles.modalContentTitle}>
          Сайт находится в разработке
        </h2>
        <p className={styles.modalContentDesc}>
          Я работаю над улучшением сайта. Спасибо за ваше терпение.
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionModal;
