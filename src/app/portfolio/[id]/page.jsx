import { items } from './data';
import Image from 'next/image';
// import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
// import PageTransition from '@/src/components/PageTransition/PageTransition';
import dynamic from 'next/dynamic';

const PageTransition = dynamic(() =>
  import('../../../components/PageTransition/PageTransition')
);
const ButtonBack = dynamic(() =>
  import('../../../components/ButtonBack/ButtonBack')
);

export function generateMetadata({ params: { id } }) {
  const item = items.find((item) => item.id === Number(id));
  return { title: item ? item.title : 'Item not found' };
}

const CollectionSite = ({ params: { id } }) => {
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <PageTransition>
        <ButtonBack />
        <h2>{item.title}</h2>
        <Image src={item.image} alt={item.title} width={600} height={500} />
        <p>{item.description}</p>
        <a href={item.website} target="_blank">
          website
        </a>
        <p>
          <a href={item.pageCode} target="_blank">
            {item.pageCode}
          </a>
        </p>
      </PageTransition>
    </>
  );
};

export default CollectionSite;
