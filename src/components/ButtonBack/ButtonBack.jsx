'use client';

import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleBack}>
      Back
    </button>
  );
};

export default ButtonBack;
