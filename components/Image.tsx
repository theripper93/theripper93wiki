import NextImage from 'next/image';
import styles from './image.module.css';
import { useState } from 'react';

export default function Image({ src, alt, className, width = 2000, height = 2000 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={className}
      style={
        expanded
          ? { width: '100%', transform: 'scale(1)', transitionDuration: '0ms' }
          : {}
      }
    >
      <span className={styles.wikiDesc}>{alt}</span>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setExpanded(!expanded)}
        style={
          expanded
            ? { width: '100%', maxHeight: 'unset', maxWidth: 'unset' }
            : {}
        }
        className={
          className == styles.wikiImage ? styles.wikiImg : styles.wikiImgSmall
        }
      />
    </div>
  );
}
