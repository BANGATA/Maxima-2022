import Link from 'next/link'
import Text from '../qna/index'
import Tanya from '../qna/question'
import Kaki from '/comps/footer'
import styles from '../../styles/Home.module.css'

const spon = () => {
    return ( 
        <div>
            <Text />
            <Tanya />
            <Link href='/danke'><button className={styles.ok} type="submit">Next</button></Link>
        </div>
     );
}
 
export default spon;