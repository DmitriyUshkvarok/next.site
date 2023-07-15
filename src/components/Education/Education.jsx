import { education } from './data-education';
import styles from './education.module.css';
import Image from 'next/image';
const Education = () => {
  return (
    <>
      <h2>Education</h2>
      <ul className={styles.educationList}>
        {education.map((educ) => (
          <li className={styles.educationListItem} key={educ.id}>
            <Image
              src={educ.image}
              alt={educ.trainings}
              width={400}
              height={500}
              className={styles.educationListImage}
            />
            <h3>{educ.trainings}</h3>
            <p>{educ.data}</p>
            <p>{educ.region}</p>
            <p>{educ.faculty}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Education;
