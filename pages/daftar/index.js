import Link from 'next/link'
import { 
    Img, 
    Flex,
    Text,
    Button 
} from '@chakra-ui/react'

const Regis = () => {
    return ( 
        <Flex
            h="100vh"
            bgImage="url(/landscape.jpg)"
            bgSize={'cover'}
            bgPosition={'center'}
            position={'relative'}
            bgRepeat={'no-repeat'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            zIndex={1}>
                <Link href='/daftar/hal4'>
            <Button
            bgColor={'orange.200'}
            borderRadius={20}>{"<"}</Button>
            </Link>
            <Flex
            direction={'column'}>
                <Flex>
            <Link href='/porto/website'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='Logo_MXM.png' 
                h={300}
                w={300}
                mb={5}
                />
                </Flex>
                <Flex
                justifyContent={'center'}>
                    <Text
                    color={'#ef4656'}
                    fontSize={20}
                    fontWeight={'bold'}>WEBSITE</Text>
                </Flex>
            </Flex>
            </a>
            </Link>
            <Link href='/noporto/acara'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='Logo_MXM.png' 
                h={300}
                w={300}
                mb={5}
                />
                </Flex>
                <Flex
                justifyContent={'center'}>
                    <Text
                    color={'#ef4656'}
                    fontSize={20}
                    fontWeight={'bold'}>ACARA</Text>
                </Flex>
            </Flex>
            </a></Link>
            <Link href='/porto/visual'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='Logo_MXM.png' 
                h={300}
                w={300}
                mb={5}
                />
                </Flex>
                <Flex
                justifyContent={'center'}>
                    <Text
                    color={'#ef4656'}
                    fontSize={20}
                    fontWeight={'bold'}>VISUAL</Text>
                </Flex>
            </Flex>
            </a>
            </Link>
            </Flex>
            <Flex
            fontSize={20}
            fontWeight={'bold'}
            justifyContent={'center'}
            >1</Flex>
            </Flex>
            <Link href='/daftar/hal2'>
            <Button
            bgColor={'orange.200'}
            borderRadius={20}>{">"}</Button>
            </Link>
        </Flex>
        // <>
        // <div className={styles.division}>
        //     <Navigasi />
        //     <h1 className={styles.divh1}>Select Division</h1>
        //     <div><Link href='/porto/dokum'><p>Dokumentasi</p></Link></div>
        //     <div><Link href='/porto/visual'><p>Visual</p></Link></div>
        //     <div><Link href='/porto/merch'><p>Merchandise</p></Link></div>
        //     <div><Link href='/porto/website'><p>Website</p></Link></div>
        //     <div><Link href='/noporto/acara'><p>Acara</p></Link></div>
        //     <div><Link href='/noporto/medrel'><p>Media Relation</p></Link></div>
        //     <div><Link href='/noporto/dekor'><p>Dekorasi</p></Link></div>
        //     <div><Link href='/noporto/seccom'><p>Security and Accomodation</p></Link></div>
        //     <div><Link href='/noporto/sponsor'><p>Sponsorship</p></Link></div>
        //     <div><Link href='/noporto/perkap'><p>Perlengkapan</p></Link></div>
        //     <div><Link href='/noporto/fm'><p>Fresh Money</p></Link></div>
        //     <div><Link href='/noporto/publikasi'><p>Publikasi</p></Link></div>
        //     <Kaki />
        // </div>
        // </>
     );
}
 
export default Regis;