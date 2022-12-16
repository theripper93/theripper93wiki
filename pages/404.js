
// Inside the "pages/404.js" file add the below code
import styles from './404.module.css'

const fontfamily = 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
 
export default function Custom404() {
    return <div className={styles.rainbow} style={{fontFamily: fontfamily, color: 'white', position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div>
        <h1 class="next-error-h1" style={{ textShadow: '0 0 2px black',mixBlendMode: 'overlay', borderRight: '1px solid white', display:'inline-block', margin:'0', marginRight:'20px', padding:'0 23px 0 0', fontSize:'24px', fontWeight:'500', verticalAlign:'top', lineHeight:'49px'}}>404 🙃</h1>
        <div style={{textShadow: '0 0 2px black',mixBlendMode: 'overlay',display:'inline-block', textAlign:'left', lineHeight:'49px', height:'49px', verticalAlign:'middle'}}><h2 style={{fontSize:'14px', fontWeight:'normal', lineHeight:'49px', margin:0, padding:0}}>You f*cked up lmao.</h2></div>
        </div>
        <a href="/" style={{textShadow: '0 0 2px black',mixBlendMode: 'overlay',textDecoration: 'none', marginTop: '1rem', display:'inline-block', textAlign:'left', lineHeight:'49px', height:'49px', verticalAlign:'middle'}}><h3 style={{color: 'white !important' ,fontWeight:'normal', lineHeight:'49px', margin:0, padding:0}}>Go back home →</h3></a>
    </div>
}