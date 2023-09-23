import { verifyWithCredentials } from '@/src/actions/authActions';
import Link from 'next/link';
import styles from './verify.module.css';

const Verify = async ({ searchParams: { token } }) => {
  const res = await verifyWithCredentials(token);
  return (
    <div className={styles.verifyBox}>
      <h1 className={styles.verifyTitle}> {res?.msg}</h1>
      <p className={styles.verifyDesc}>
        Tеперь можете войти в свою учётную запись используя емейл и пароль
      </p>
      <span className={styles.verifyDescSpan}>😉</span>
      <Link className={styles.verifyLink} href="signin">
        Войти со своего аккаунта используя емейл и пароль
      </Link>
    </div>
  );
};

export default Verify;
