import Educations from '@/src/components/Education/Education';
import PageTransition from '@/src/components/PageTransition/PageTransition';

import Works from '@/src/components/Works/Works';

const About = () => {
  return (
    <>
      <PageTransition>
        <Works />
        <Educations />
      </PageTransition>
    </>
  );
};

export default About;
