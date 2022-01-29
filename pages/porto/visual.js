import Link from 'next/link'
import Text from '../qna/index'
import Tanya from '../qna/question'
import Kaki from '/comps/footer'
import styles from '../../styles/Home.module.css'

const vis = () => {
    return ( 
        <div>
            <Text />
            <form>
                Portofolio
                <input
                type="file"
                name="porto"></input>
            </form>
            <Tanya />
            <Link href='/danke'><button className={styles.ok} type="submit">Next</button></Link>
        </div>
     );
}
 
export default vis;