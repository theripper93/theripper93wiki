import Image from 'next/image'
import styles from '../pages/globals.module.css'

export default function ImageButBetter({ src, alt, ...props }) {
    return (
        <div className={props.className}>
            <span className={styles.wikidesc}>{alt}</span>
            <Image
            src={src}
            alt={alt}
            width={2000}
            height={2000}
            />
        </div>
    )
}