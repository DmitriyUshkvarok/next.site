import dynamic from 'next/dynamic';

const Works = dynamic(() => import('../../components/Works/Works'));
const Education = dynamic(() => import('../../components/Education/Education'));
const PageTransition = dynamic(() =>
  import('../../components/PageTransition/PageTransition')
);
const ButtonBack = dynamic(() =>
  import('../../components/ButtonBack/ButtonBack')
);

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
