'use client';
// import { useFormStatus } from 'react-dom';
import styles from './buttoSubmit.module.css';
import { fredericka } from '@/src/app/fonts';

const ButtonSubmit = ({ value, ...props }) => {
  // const { pending } = useFormStatus();
  return (
    <>
      <button
        className={styles.btnSubmit}
        {...props}
        // disabled={pending}
        type="button"
      >
        <span className={fredericka.className}>{value}</span>
      </button>
    </>
  );
};

export default ButtonSubmit;
