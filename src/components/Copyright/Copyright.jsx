import styles from './copyright.module.css';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.copyright}>
      <div className={styles.copyrightContent}>
        &copy; {currentYear} Dmitriy Ushkarok. All rights reserved.
      </div>
    </div>
  );
};

export default Copyright;
