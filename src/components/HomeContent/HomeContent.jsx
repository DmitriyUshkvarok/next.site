'use client';
import Link from 'next/link';
import style from './homeContent.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HomeContent = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textToType =
      'During my time in web development, I have built a portfolio of Ten projects using React, Redux, Next.js, Node Js, JavaScript, HTML, CSS, SCSS, Handlebars, Parcel, Webpack. These projects demonstrate my technical skills and ability to build responsive and interactive web applications. Also, I have experience working on various projects and understand the principles of good architecture and design. In addition, my friends and I have successfully implemented a commercial online store, which included all stages of development, from SEO optimization to the deployment of the project on hosting with a domain name. I also completed a month-long internship at Beetroot, where I learned basic WordPress and PHP skills. This experience taught me the importance of paying attention to detail and meeting project deadlines. In my GoIT courses, I collaborated with other developers on team projects, including two web applications. As a team leader, I assigned roles and tasks to team members, ensuring that their skills were utilized effectively. We used GitHub to work on these projects, where I gained experience managing patch requests, conducting code reviews, and merging code. This experience with GitHub taught me the importance of collaboration and communication within a team. Overall, my work in web development has helped me develop a variety of skills including technical knowledge, project management, and collaboration.';

    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);
  return (
    <section>
      <div className={style.promoWrapper}>
        <div className={style.promoWrapperBlockInfo}>
          <h1 className={style.promoWrapperBlockTitle}>
            I`am Dmitriy Ushkvarok
          </h1>
          <p className={style.promoWrapperBlockSubTitle}>Web Developer</p>
          <div className={style.buttonWrapper}>
            <Link
              className={style.downloadLink}
              href="/CV_Dmitriy_Ushkvarok_Frontend_Developer.pdf"
              passHref
              target="_blank"
            >
              Download CV
            </Link>
            <Link
              className={style.downloadLink}
              href="/Dmytro_Ushkvarok.pdf"
              passHref
              target="_blank"
            >
              Download Certificate
            </Link>
          </div>
          <Link href="/about" className={style.promoWrapperAboutLink}>
            About me
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
      <div className={style.about}>{displayText}</div>
    </section>
  );
};

export default HomeContent;
