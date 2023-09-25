import ButtonBack from '@/src/components/ButtonBack/ButtonBack';
import PageTransition from '@/src/components/PageTransition/PageTransition';
import Link from 'next/link';
import Image from 'next/image';


const Blog =() => {

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
