'use client';
import { works } from './data-work';
import Image from 'next/image';
import styles from './works.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation();
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
      <h2 className={styles.aboutTitle}>{t('about.work_experience')}</h2>
      <div className={styles.aboutHeroImg}>
        <Image
          className={styles.aboutWorkImg}
          src="/other.PNG"
          alt="page photo"
          width={400}
          height={500}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
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
            />
            <div className={styles.workListInfoWrapper}>
              <h3 className={styles.workListInfoWrapperTitle}>
                {t(`about.enterpriseJob${work.id}`)}
              </h3>
              <p className={styles.workListInfoWrapperData}>
                {t(`about.enterpriseJob${work.id}Dates`)}
              </p>
              <h3 className={styles.workListInfoWrapperRegion}>
                {t(`about.region${work.id}`)}
              </h3>
              <ul className={styles.workListInfoWrapperList}>
                {work.position.map((_, index) => (
                  <li key={index}>
                    {t(
                      `about.position${work.id}.position${work.id}_${index + 1}`
                    )}
                  </li>
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
