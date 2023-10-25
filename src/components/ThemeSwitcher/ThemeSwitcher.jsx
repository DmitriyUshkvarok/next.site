'use client';
import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { setTheme } from '@/src/redux/themeSlice/themeSlice';
import { useEffect } from 'react';
import styles from './themeSwitcher.module.css';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.themeColor);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  const handleThemeToggle = () => {
    const newTheme = themeColor === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
  };
  return (
    <div className={styles.themeSwitcherBox}>
      <button
        type="button"
        name="toggle theme"
        aria-label="toggle theme"
        className={styles.themeSwitcherBtn}
        onClick={handleThemeToggle}
      >
        {themeColor === 'dark' ? (
          <FaSun size={20} color="orange" />
        ) : (
          <FaMoon size={20} color="black" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
