'use client';
import { education } from './data-education';
import styled from './education.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fredericka } from '@/src/app/fonts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Educations = () => {
  const { t } = useTranslation();

  const animateOnScroll = () => {
    education.forEach((educ, index) => {
      const educationListItem = document.querySelector(
        `.${styled.educationListItem}:nth-child(${index + 1})`
      );

      gsap.from(educationListItem, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: educationListItem,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: true,
          toggleActions: 'play none none reset',
        },
      });

      gsap.from(
        educationListItem.querySelector(`.${styled.educationListImage}`),
        {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: educationListItem,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: true,
            toggleActions: 'play none none reset',
          },
        }
      );

      gsap.from(
        educationListItem.querySelector(`.${styled.flexContainerBottom}`),
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: educationListItem,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: true,
            toggleActions: 'play none none reset',
          },
        }
      );
    });
  };

  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <div className={(styled.educationBlock, fredericka.className)}>
      <h2 className={styled.educationTitle}>{t('education.title')}</h2>
      <ul className={styled.educationList}>
        {education.map((educ) => (
          <li className={styled.educationListItem} key={educ.id}>
            <div>
              <Image
                src={educ.image}
                alt={educ.trainings}
                width={900}
                height={400}
                className={styled.educationListImage}
                loading="lazy"
              />
            </div>
            <div className={styled.flexContainerBottom}>
              <h3 className={styled.trainingsTitle}>
                {t(`education.item${educ.id}.trainings`)}
              </h3>
              <p className={styled.trainingsData}>
                {t(`education.item${educ.id}.data`)}
              </p>
              <p className={styled.trainingsRegion}>
                {t(`education.item${educ.id}.region`)}
              </p>
              <p className={styled.trainingsFaculty}>
                {t(`education.item${educ.id}.faculty`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Educations;
