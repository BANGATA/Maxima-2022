import styles from '../../styles/Home.module.css'

const text = () => {
    return ( 
        <div className={styles.col}>
            <form>
                <div>Nama Lengkap</div>
                <input className={styles.ulir}
                type="text"
                name="name"
                >
                </input><br></br>
                <div>NIM</div>
                <input className={styles.ulir}
                type="text"
                name="nim"
                >
                </input>
                <br></br>
                <div>Tempat Lahir</div>
                <input className={styles.ulir}
                type="text"
                name="tmptlahir"
                ></input><br></br>
                <div>Tanggal Lahir</div>
                <input className={styles.ulir}
                type="date"
                name="tglahir"
                ></input>
                <br></br>
                <div>Jenis Kelamin</div>
                <input className={styles.ulir}
                type="text"
                name="gender"
                placeholder="L/P"
                ></input>
                <br></br>
                <div>Alamat</div>
                <input className={styles.ulir}
                type="text"
                name="add"
                ></input>
                <br></br>
                <div>Angkatan</div>
                <select className={styles.ulir}>
                <option value=""></option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                </select>
                <br></br>
                <div>Program Studi</div>
                <input className={styles.ulir}
                type="text"
                name="prodi"
                ></input>
                <br></br>
                <div>IPS</div>
                <input className={styles.ulir}
                type="number"
                name="IPS">
                </input>
                <br></br>
                <div>Line</div>
                <input className={styles.ulir}
                type="text"
                name="idline">
                </input><br></br>
                <div>Instagram</div>
                <input className={styles.ulir}
                type="text"
                name="instagram"
                placeholder="Isi tanpa @">
                </input>
                <br></br>
                <div>Pengalaman</div>
                <textarea className={styles.txt}
                type="text"
                name="exp">
                </textarea>
            </form>
        </div>
     );
}
 
export default text;