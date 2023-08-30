import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import Works from '@/src/components/Works/Works';
import Education from '@/src/components/Education/Education';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const About = () => {
  return (
    <>
      <PageTransition>
        <ButtonBack />
        <Works />
        <Education />
      </PageTransition>
    </>
  );
};

export default About;
