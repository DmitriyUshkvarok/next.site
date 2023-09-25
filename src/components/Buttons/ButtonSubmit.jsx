'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import styles from './buttoSubmit.module.css';
import { fredericka } from '@/src/app/fonts';

const ButtonSubmit = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button className={styles.btnSubmit} {...props} disabled={pending}>
        <span className={fredericka.className}>
          {pending ? 'Loading...' : value}
        </span>
      </button>
    </>
  );
};

export default ButtonSubmit;
