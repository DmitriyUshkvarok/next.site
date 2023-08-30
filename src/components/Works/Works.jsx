'use client';
import { works } from './data-work';
import Image from 'next/image';
import styles from './works.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [itemVisibility, setItemVisibility] = useState(
    works.map(() => false) // Изначально все элементы скрыты
  );

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const newVisibility = [...itemVisibility];

    for (let i = 0; i < works.length; i++) {
      if (scrollTop > 100 * i && !itemVisibility[i]) {
        newVisibility[i] = true;
      }
    }

    setItemVisibility(newVisibility);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemVisibility]);

  return (
    <>
      <h2>Work Experience</h2>
      <Image
        src="/other.PNG"
        alt="page photo"
        width={400}
        height={500}
        onLoad={() => setImageLoaded(true)}
      />
      <ul className={styles.workList}>
        {works.map((work, index) => (
          <motion.li
            key={work.id}
            className={styles.workListItem}
            style={{
              opacity: itemVisibility[index] ? 1 : 0, // Применяем видимость
              y: itemVisibility[index] ? 0 : 50, // Применяем анимацию по оси Y
            }}
            initial={{ opacity: 0, y: 50 }} // Начальное состояние элемента
            animate={{
              opacity: itemVisibility[index] ? 1 : 0,
              y: itemVisibility[index] ? 0 : 50,
            }} // Анимация
            transition={{ duration: 0.5 }} // Длительность анимации
          >
            <Image
              src={work.image}
              alt={work.enterprise}
              width={400}
              height={500}
              className={`${styles.workListImage} ${
                imageLoaded ? styles.loaded : ''
              }`}
              style={{ borderRadius: '50% 10% 50% 10% / 10% 50% 10% 50%' }}
            />
            <div className={styles.workListInfoWrapper}>
              <h3>{work.enterprise}</h3>
              <p>{work.data}</p>
              <h3>{work.region}</h3>
              <ul>
                {work.position.map((position, index) => (
                  <li key={index}>{position}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Works;
