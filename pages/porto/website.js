import Link from 'next/link'
import Text from '../qna/index'
import Tanya from '../qna/question'
import Kaki from '/comps/footer'
import styles from '../../styles/Home.module.css'

const web = () => {
    return (
        <> 
        <div className={styles.kol}>
            <Text />
            <div className={styles.col1}>
            Portofolio
            <form>
                <input
                type="file"
                name="porto"
                ></input>
            </form>
            </div>
            <Tanya />
            <div className={styles.col1}>
            <form>
                <div>Jelaskan kombinasi dari frontend dan backend!</div>
                <textarea
                className={styles.txt}
                type="text"
                name="qs"
                ></textarea>
            </form>
            </div>
        </div>
        <div>
        <Link href='/danke'><button className={styles.ok} type="submit"><img src="../../next_butt.png" alt="Next" layout="responsive"/></button></Link>
        </div>
        </>
     );
}
 
export default web;