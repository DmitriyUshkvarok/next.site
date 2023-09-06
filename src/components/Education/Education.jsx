'use client';
import { education } from './data-education';
import styled from './education.module.css';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Educations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const animationStartPoint = viewportHeight / 2;
    if (scrollY > animationStartPoint) {
      controls.start({ opacity: 1, x: '0%' });
    } else {
      controls.start({ opacity: 0, x: '100%' });
    }
  }, [scrollY, viewportHeight, controls]);

  return (
    <motion.div
      className={styled.educationBlock}
      initial={{ opacity: 1, x: '100%' }}
      transition={{ opacity: { duration: 0.7 }, x: { duration: 0.7 } }}
      animate={controls}
    >
      <h2 className={styled.educationTitle}>Education</h2>
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
              />
            </div>
            <motion.div
              className={styled.flexContainerBottom}
              initial={{ opacity: 1, x: '100%' }}
              transition={{ opacity: { duration: 1.5 }, x: { duration: 1.5 } }}
              animate={controls}
            >
              <h3 className={styled.trainingsTitle}>{educ.trainings}</h3>
              <p className={styled.trainingsData}>{educ.data}</p>
              <p className={styled.trainingsRegion}>{educ.region}</p>
              <p className={styled.trainingsFaculty}>{educ.faculty}</p>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Educations;
