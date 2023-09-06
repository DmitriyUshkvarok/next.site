import dynamic from 'next/dynamic';
import Educations from '@/src/components/Education/Education';

const Works = dynamic(() => import('../../components/Works/Works'));

const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);

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
