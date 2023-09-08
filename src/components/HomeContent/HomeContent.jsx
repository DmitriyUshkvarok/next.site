'use client';
import Link from 'next/link';
import style from './homeContent.module.css';
import Image from 'next/image';
import Container from '../Container/Container';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomeContent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const controls = useAnimation();
  const { t } = useTranslation();

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
    <section>
      <Container>
        <div className={style.promoWrapper}>
          <div className={style.promoWrapperBlockInfo}>
            <h1 className={style.promoWrapperBlockTitle}>{t('home.title')}</h1>
            <p className={style.promoWrapperBlockSubTitle}>
              {t('home.subTitle')}
            </p>
            <div className={style.buttonWrapper}>
              <Link
                className={style.downloadLink}
                href="/CV_Dmitriy_Ushkvarok_Frontend_Developer.pdf"
                passHref
                target="_blank"
              >
                {t('home.download_cv')}
              </Link>
              <Link
                className={style.downloadLink}
                href="/Dmytro_Ushkvarok.pdf"
                passHref
                target="_blank"
              >
                {t('home.download_certificate')}
              </Link>
            </div>
            <Link href="/about" className={style.promoWrapperAboutLink}>
              {t('home.aboutLink')}
            </Link>
          </div>
          <div className={style.promoWrapperBlockPhoto}>
            <div className={style.promoWrapperImageBox}>
              <Image
                src="/user1.png"
                alt="photo user"
                width={650}
                height={950}
                sizes="100vh"
                className={style.promoWrapperImage}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <motion.div
          className={style.shadow}
          initial={{ opacity: 1, x: '100%' }}
          transition={{ opacity: { duration: 1 }, x: { duration: 1 } }}
          animate={controls}
        >
          <div className={style.about}>{t('home.about_me')}</div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeContent;
