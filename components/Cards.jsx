import Link from 'next/link';
import styles from '../pages/cards.module.css';

export default function Cards({ cards }) {
    return (
        <div className={styles.cardcontainer}>
        {cards.map((card) => (
            <Card key={card.title} {...card} />
        ))}
        </div>
    );
}

function Card({ icon, title, href }) {
    return (
        <Link href={href ?? './'} className={styles.card}>{title}</Link>
    );
}