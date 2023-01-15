import styles from './404.module.css';
import Router, { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter()
  return (
    <div className={styles.rainbow}>
      <div>
        <h1 className={styles.heading}>404 🙃</h1>
        <div className={styles.subheadingContainer}>
          <h2 className={styles.subheading}>You f*cked up lmao.</h2>
        </div>
      </div>
      <div onClick={() => router.back()} className={styles.returnContainer}>
        <h3 className={styles.return}>Go back home →</h3>
      </div>
    </div>
  );
}
