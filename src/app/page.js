import styles from './page.module.css';
import LogInForm from '../components/AuthForm/FormLogin/FormLogin';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Welcome to my next js project</h2>
      <LogInForm />
    </main>
  );
}
