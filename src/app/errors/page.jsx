'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import PageTransition from '@/src/components/PageTransition/PageTransition';

const Errors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorMsg = searchParams.get('error');
  return (
    <div style={{ marginTop: '90px' }}>
      <PageTransition>
        <h1 style={{ color: 'red' }}>Errors:{errorMsg}</h1>
        <button onClick={() => router.back()}>Try Again</button>
      </PageTransition>
    </div>
  );
};

export default Errors;
