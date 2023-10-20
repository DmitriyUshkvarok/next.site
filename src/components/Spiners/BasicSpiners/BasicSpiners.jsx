'use client';
import styles from './BasicSpiner.module.css';
import { Hourglass } from 'react-loader-spinner';
const BasicSpiners = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Hourglass
        visible={true}
        width="350"
        ariaLabel="hourglass-loading"
        colors={['#f12711', '#f5af19']}
      />
    </div>
  );
};

export default BasicSpiners;
