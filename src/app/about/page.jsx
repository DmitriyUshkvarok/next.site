import Educations from '@/src/components/About/Education/Education';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import styles from './aboutPage.module.css';
import Works from '@/src/components/About/Works/Works';
import { getAllWorks } from '@/src/actions/worksAction';

export const metadata = {
  title: 'About Page | My Site Portfolio About',
  description:
    'Welcome to my site portfolio, where you can explore my work as a web developer, learn about my skills and experience, browse through my portfolio showcasing various projects, read about my background and interests, view my gallery of creative work, and easily get in touch with me to discuss potential collaborations or projects. This site is built with Next.js and features server-side rendering for a seamless user experience.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

const About = async () => {
  const { works } = await getAllWorks();
  return (
    <>
      <PageTransition>
        <h1 className="hiddenTitle">About Page</h1>
        <section className={styles.aboutSection}>
          <Works works={works} />
          <Educations />
        </section>
      </PageTransition>
    </>
  );
};

export default About;
