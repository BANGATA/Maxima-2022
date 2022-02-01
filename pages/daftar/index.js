import Link from 'next/link'
import { 
    Img, 
    Flex,
    Text,
    Button 
} from '@chakra-ui/react'

const Regis = () => {
    return ( 
        // <Flex flexDirection={['column', 'column', 'row', 'row']}>
        //     <Flex border={'solid'}>
        //         Tes
        //     </Flex>
        //     <Flex border={'solid'}>
        //         Ini
        //     </Flex>
        //     <Flex border={'solid'}>
        //         Buat
        //     </Flex>
        //     <Flex border={'solid'}>
        //         Responsive
        //     </Flex>
        // </Flex>
        <Flex
            flexDirection={['column', 'column', 'row', 'row']}
            minHeight="100vh"
            bgImage={['/phone.jpg', '/landscape.jpg', '/landscape.jpg', '/landscape.jpg']}
            bgPosition={['center', 'bottom', 'bottom', 'bottom']}
            bgSize={'cover'}
            bgPosition={'center'}
            position={'relative'}
            bgRepeat={'no-repeat'}
            position={'relative'}
            // bgGradient='linear(to-b, #fafbee, #e1f0ec)'
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            zIndex={1}>
                <Link href='/daftar/hal4'>
            <Button
            bgColor={'orange.200'}
            borderRadius={20}>{"<"}</Button>
            </Link>
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