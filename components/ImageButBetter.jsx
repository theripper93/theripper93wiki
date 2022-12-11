import Image from 'next/image';
import styles from '../pages/globals.module.css';
import { useState } from 'react';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

export default function ImageButBetter({ src, alt, ...props }) {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={props.className} style={expanded ? { width: '100%', transform: 'scale(1)' } : {}}>
      <span className={styles.wikidesc}>{alt}</span>
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={2000}
        onClick={() => setExpanded(!expanded)}
        style={expanded ? { width: '100%', maxHeight: 'unset', maxWidth: 'unset' } : {}}
        className={
          props.className == styles.wikiimage ? styles.wikiimg : styles.wikiimgsmall
        }
      />
    </div>
  );
}
