import Educations from '@/src/components/Education/Education';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import styles from './aboutPage.module.css';
import Works from '@/src/components/Works/Works';
import { getAllWorks } from '@/src/actions/worksAction';

export const metadata = {
  title: 'About Page | My Site Portfolio About',
  description:
    'web developer Dmitriy Ushkvarok,welcome to my about page Dmitriy Ushkvarok',
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
        <section className={styles.aboutSection}>
          <Works works={works} />
          <Educations />
        </section>
      </PageTransition>
    </>
  );
};

export default About;
