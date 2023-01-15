import Link from 'next/link';
import styles from './cards.module.css';

export default function Cards({ cards }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}

function Card({ title, href }) {
  return (
    <Link href={href ?? './'} className={styles.card}>
      {title}
    </Link>
  );
}
