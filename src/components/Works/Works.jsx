import { works } from './data-work';
import Image from 'next/image';
import styles from './works.module.css';

const Works = () => {
  return (
    <>
      <h2>Work Experience</h2>
      <Image src="/other.PNG" alt="page photo" width={400} height={500} />
      <ul className={styles.workList}>
        {works.map((work) => (
          <li key={work.id} className={styles.workListItem}>
            <Image
              src={work.image}
              alt={work.enterprise}
              width={400}
              height={500}
              className={styles.workListImage}
            />
            <div className={styles.workListInfoWrapper}>
              <h3>{work.enterprise}</h3>
              <p>{work.data}</p>
              <h3>{work.region}</h3>
              <ul>
                {work.position.map((position, index) => (
                  <li key={index}>{position}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Works;
