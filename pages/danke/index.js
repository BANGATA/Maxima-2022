import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Thanks = () => {
    return ( 
        <div className={styles.ty}>
            <h1 className={styles.typo}>TERIMA KASIH</h1>
            <p className={styles.pd}>Terima kasih atas antusias kamu
            untuk bergabung dengan Maxima 2022</p>
            <Link href='/'><button className={styles.laman}>Home</button></Link>
        </div>
     );
}
 
export default Thanks;