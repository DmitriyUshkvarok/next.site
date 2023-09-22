'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import styles from './buttoSubmit.module.css';

const ButtonSubmit = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button className={styles.btnSubmit} {...props} disabled={pending}>
        {pending ? 'Loading...' : value}
      </button>
    </>
  );
};

export default ButtonSubmit;
