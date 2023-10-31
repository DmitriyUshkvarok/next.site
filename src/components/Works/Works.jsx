'use client';
import Image from 'next/image';
import styles from './works.module.css';
import { useTranslation } from 'react-i18next';
import { fredericka } from '@/src/app/fonts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Works = ({ works }) => {
  const { t } = useTranslation();

  const animateOnScroll = () => {
    const workItems = document.querySelectorAll(`.${styles.workListItem}`);
    workItems.forEach((workItem, index) => {
      gsap.from(workItem, {
        opacity: 0,
        scale: 0.7,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: workItem,
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
      <h1 className={styles.aboutTitle}>Work Experience</h1>
      <div className={styles.aboutHeroImg}>
        <Image
          className={styles.aboutWorkImg}
          src="https://res.cloudinary.com/dlllyuipi/image/upload/v1696954152/E09EED73-24BD-4239-B3FC-2EEB16027D8D_liwv1b.webp"
          alt="page photo"
          width={200}
          height={200}
          sizes="(max-width: 768px) 50vw ,75vw"
        />
      </div>
      <ul className={styles.workList}>
        {works &&
          works?.map((work) => (
            <li key={work._id} className={styles.workListItem}>
              <Image
                src={`${work?.image}`}
                alt="work photo"
                sizes="100vw"
                width={400}
                height={200}
                className={styles.workListImage}
              />
              <div className={styles.workListInfoWrapper}>
                <h3 className={styles.workListInfoWrapperTitle}>
                  {work.enterprise}
                </h3>
                <p className={styles.workListInfoWrapperData}>{work.data}</p>
                <h3 className={styles.workListInfoWrapperRegion}>
                  {work.region}
                </h3>
                <ul className={styles.workListInfoWrapperList}>
                  {work.position.map((pos, index) => (
                    <li key={index}>{pos}</li>
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
