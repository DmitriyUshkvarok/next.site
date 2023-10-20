import { itemsTechnology } from './techData';
import Image from 'next/image';
import styles from './TechnologyList.module.css';
import Link from 'next/link';

const TechnologyList = () => {
  return (
    <div className={styles.techWrapper}>
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
                    className={styles.techImage}
                  />
                </div>
                <h3 className={styles.techTitle}>{item.title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TechnologyList;
