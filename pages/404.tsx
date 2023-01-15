// Inside the "pages/404.js" file add the below code
import styles from './404.module.css'

export default function Custom404() {
    return (
      <div className={styles.rainbow}>
        <div>
          <h1 className='next-error-h1 heading'>404 🙃</h1>
          <div
            className={styles.subheadingContainer}
          >
            <h2
              style={{
                fontSize: '14px',
                fontWeight: 'normal',
                lineHeight: '49px',
                margin: 0,
                padding: 0,
              }}
            >
              You f*cked up lmao.
            </h2>
          </div>
        </div>
        <a
          href='/'
          className={styles.text}
          style={{
            textShadow: '0 0 2px black',
            mixBlendMode: 'overlay',
            textDecoration: 'none',
            marginTop: '1rem',
            display: 'inline-block',
            textAlign: 'left',
            lineHeight: '49px',
            height: '49px',
            verticalAlign: 'middle',
          }}
        >
          <h3
            style={{
              color: 'white !important',
              fontWeight: 'normal',
              lineHeight: '49px',
              margin: 0,
              padding: 0,
            }}
          >
            Go back home →
          </h3>
        </a>
      </div>
    );
}