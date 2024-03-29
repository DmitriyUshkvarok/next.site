'use client';
import Link from 'next/link';
import style from './homeContent.module.css';
import Image from 'next/image';
import Container from '../../Container/Container';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fredericka, montserrat } from '@/src/app/fonts';
import TechnologyList from '../TechnologyList/TechnologyList';
import { useSelector } from 'react-redux';

const HomeContent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const controls = useAnimation();
  const { t } = useTranslation();
  const currentTheme = useSelector((state) => state.theme.themeColor);

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
    const animationStartPoint = viewportHeight / 4;
    if (scrollY > animationStartPoint) {
      controls.start({ opacity: 1, x: '0%' });
    } else {
      controls.start({ opacity: 0, x: '100%' });
    }
  }, [scrollY, viewportHeight, controls]);

  return (
    <section>
      <Container>
        <div className={style.promoWrapper}>
          <div className={style.promoWrapperBlockInfo}>
            <h2
              className={`${fredericka.className} ${style.promoWrapperBlockTitle}`}
            >
              {t('home.title')}
            </h2>
            <p
              className={`${fredericka.className} ${style.promoWrapperBlockSubTitle}`}
            >
              {t('home.subTitle')}
            </p>
            <div className={style.buttonWrapper}>
              <a
                className={`${style.downloadLink} ${fredericka.className}`}
                href="/CV_Dmitriy Ushkvarok(Frontend_Developer).pdf"
                target="_blank"
                download
              >
                {t('home.download_cv')}
              </a>
              <a
                className={`${style.downloadLink} ${fredericka.className}`}
                href="/Dmytro_Ushkvarok.pdf"
                target="_blank"
                download
              >
                {t('home.download_certificate')}
              </a>
            </div>
          </div>
          <div className={style.promoWrapperBlockPhoto}>
            <div className={style.promoWrapperImageBox}>
              {currentTheme === 'dark' ? (
                <Image
                  src={
                    'https://res.cloudinary.com/dlllyuipi/image/upload/v1698944576/%D0%A2%D0%B5%D0%BC%D0%B0_daqv8v.webp'
                  }
                  alt="photo user"
                  width={217}
                  height={750}
                  sizes="(max-width: 480px) 25vw ,(max-width: 768px) 50vw ,100vw"
                  quality={75}
                  className={style.promoWrapperImage}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Image
                  src={
                    'https://res.cloudinary.com/dlllyuipi/image/upload/v1697891546/%D0%A2%D0%B5%D0%BC%D0%B0_nkqb8h.webp'
                  }
                  alt="photo user"
                  width={217}
                  height={750}
                  sizes="(max-width: 480px) 25vw ,(max-width: 768px) 50vw ,100vw"
                  quality={60}
                  className={style.promoWrapperImageWhiteTheme}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
          </div>
        </div>
        <TechnologyList />
        <motion.div
          className={style.shadow}
          initial={{ opacity: 1, x: '100%' }}
          transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 } }}
          animate={controls}
        >
          <div className={style.about}>{t('home.about_me')}</div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeContent;
