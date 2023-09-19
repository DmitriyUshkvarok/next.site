import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <>
      <PageTransition>
        <div>
          {data.map((item) => (
            // <Link href={`blog/${item._id}`} >
            <>
              <div key={item._id}>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              </div>
            </>
            // </Link>
          ))}
        </div>
        <ButtonBack />
      </PageTransition>
    </>
  );
};

export default Blog;
