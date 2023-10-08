'use client';
import { works } from './data-work';
import Image from 'next/image';
import styles from './works.module.css';
import { useTranslation } from 'react-i18next';
import { fredericka } from '@/src/app/fonts';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const { t } = useTranslation();

  const animateOnScroll = () => {
    works.forEach((work, index) => {
      const workListItem = document.querySelector(
        `.${styles.workListItem}:nth-child(${index + 1})`
      );

      gsap.from(workListItem, {
        opacity: 0,
        x: -50,
        scrollTrigger: {
          trigger: workListItem,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: true,
          toggleActions: 'play none none reset',
        },
      });
    });
  };

  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <div className={fredericka.className}>
      <h2 className={styles.aboutTitle}>{t('about.work_experience')}</h2>
      <div className={styles.aboutHeroImg}>
        <Image
          className={styles.aboutWorkImg}
          src="/about-title.webp"
          alt="page photo"
          width={400}
          height={500}
        />
      </div>
      <ul className={styles.workList}>
        {works.map((work) => (
          <li key={work.id} className={styles.workListItem}>
            <Image
              src={work.image}
              alt={work.enterprise}
              width={400}
              height={500}
              className={styles.workListImage}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
