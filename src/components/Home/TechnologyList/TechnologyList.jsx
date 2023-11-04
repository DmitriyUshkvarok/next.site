import { itemsTechnology } from './techData';
import Image from 'next/image';
import styles from './TechnologyList.module.css';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { fredericka } from '@/src/app/fonts';

const TechnologyList = () => {
  return (
    <div className={styles.techWrapper}>
      <Marquee speed={30} gradient={false} pauseOnHover={true}>
        <ul className={styles.techList}>
          {itemsTechnology &&
            itemsTechnology.map((item) => (
              <li key={item.id} className={styles.techItem}>
                <Link
                  href={item.link}
                  target="_blank"
                  className={styles.techLink}
                >
                  <div className={styles.techImageWrapper}>
                    <Image
                      src={item.image}
                      alt="technology"
                      width={50}
                      height={30}
                      sizes="100vw"
                      className={styles.techImage}
                    />
                  </div>
                  <h2 className={`${styles.techTitle} ${fredericka.className}`}>
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default TechnologyList;
