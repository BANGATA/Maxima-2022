import Link from 'next/link'
import Navigasi from '../../comps/navbar'
import Kaki from '../../comps/footer'
import styles from '../../styles/Home.module.css'

const Regis = () => {
    return ( 
        <>
        <div className={styles.division}>
            <Navigasi />
            <h1 className={styles.divh1}>Select Division</h1>
            <div><Link href='/porto/dokum'><p>Dokumentasi</p></Link></div>
            <div><Link href='/porto/visual'><p>Visual</p></Link></div>
            <div><Link href='/porto/merch'><p>Merchandise</p></Link></div>
            <div><Link href='/porto/website'><p>Website</p></Link></div>
            <div><Link href='/noporto/acara'><p>Acara</p></Link></div>
            <div><Link href='/noporto/medrel'><p>Media Relation</p></Link></div>
            <div><Link href='/noporto/dekor'><p>Dekorasi</p></Link></div>
            <div><Link href='/noporto/seccom'><p>Security and Accomodation</p></Link></div>
            <div><Link href='/noporto/sponsor'><p>Sponsorship</p></Link></div>
            <div><Link href='/noporto/perkap'><p>Perlengkapan</p></Link></div>
            <div><Link href='/noporto/fm'><p>Fresh Money</p></Link></div>
            <div><Link href='/noporto/publikasi'><p>Publikasi</p></Link></div>
            <Kaki />
        </div>
        </>
     );
}
 
export default Regis;