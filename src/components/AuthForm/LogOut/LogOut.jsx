'use client';
import styles from './logout.module.css';
import { signOut } from 'next-auth/react';
import Notiflix from 'notiflix';

const LogOut = () => {
  const handleClickLogOut = () => {
    Notiflix.Confirm.init({
      width: '560px',
      position: 'center',
      backgroundColor: 'gray',
      cssClass: styles.customConfirm, // Добавьте пользовательский класс стилей
      cssSelector: {
        overlay: '.custom-overlay', // Пользовательский селектор для оверлея
        yesButton: styles.customYesButton, // Пользовательский селектор для кнопки "Да"
        noButton: '.custom-no-button', // Пользовательский селектор для кнопки "Нет"
      },
    });

    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        try {
          signOut({ callbackUrl: '/' });
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };
  return (
    <>
      <button
        className={styles.btnLogout}
        type="button"
        onClick={handleClickLogOut}
      >
        Logout
      </button>
    </>
  );
};

export default LogOut;
