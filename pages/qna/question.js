import styles from '../../styles/Home.module.css'

const Tanya = () => {
    return ( 
        <div className={styles.col1}>
            <form>
                <div>Menurut kamu apa arti "Neverland"?</div>
                <textarea className={styles.txt}></textarea>
                <br></br>
                <div>Harapan kamu untuk MAXIMA 2022?</div>
                <textarea className={styles.txt}></textarea>
            </form>
        </div>
     );
}
 
export default Tanya;