'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const ButtonSubmit = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button {...props} disabled={pending}>
        {pending ? 'Loading...' : value}
      </button>
    </>
  );
};

export default ButtonSubmit;
