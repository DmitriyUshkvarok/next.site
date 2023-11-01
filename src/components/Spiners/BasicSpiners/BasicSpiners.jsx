'use client';
import styles from './BasicSpiner.module.css';
import { Hourglass } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const BasicSpiners = () => {
  const currentTheme = useSelector((state) => state.theme.themeColor);
  const color =
    currentTheme === 'dark' ? ['#f12711', '#f5af19'] : ['#3c3b3b', '#090909'];
  return (
    <div className={styles.loaderWrapper}>
      <Hourglass
        visible={true}
        width="350"
        ariaLabel="hourglass-loading"
        colors={color}
      />
    </div>
  );
};

export default BasicSpiners;
