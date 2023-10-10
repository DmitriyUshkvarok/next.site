import Educations from '@/src/components/Education/Education';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import styles from './aboutPage.module.css';
import Works from '@/src/components/Works/Works';

const About = () => {
  return (
    <>
      <PageTransition>
        <section className={styles.aboutSection}>
          <Works />
          <Educations />
        </section>
      </PageTransition>
    </>
  );
};

export default About;
