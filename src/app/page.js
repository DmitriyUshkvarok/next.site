import dynamic from 'next/dynamic';

const PageTransition = dynamic(() =>
  import('../components/PageTransition/PageTransition.jsx')
);
const HomeContent = dynamic(() =>
  import('../components/HomeContent/HomeContent.jsx')
);
export default function Home() {
  return (
    <>
      <PageTransition>
        <HomeContent />
      </PageTransition>
    </>
  );
}
