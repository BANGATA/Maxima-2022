import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { 
    Img, 
    Flex,
    Text,
    Button 
} from '@chakra-ui/react'

const Thanks = () => {
    return ( 
        <Flex
            h="100vh"
            bgImage="url(/AkhirMXM.jpg)"
            bgSize={'cover'}
            bgPosition={'center'}
            position={'relative'}
            bgRepeat={'no-repeat'}
            justifyContent={'center'}
            alignItems={'center'}
            direction={'column'}>
                <Flex
                // border={'solid'}
                w={'75%'}
                h={250}
                direction={'column'}>
                    <Flex
                    // border={'solid'}
                    // h={50}
                    w={'50%'}
                    fontSize='40px'
                    color='#fff'
                    fontWeight={'bold'}
                    textAlign={'center'}
                    justifyContent={'center'}
                    >
                        TERIMA KASIH
                    </Flex>
                    <Flex
                    // border={'solid'}
                    mt={5}
                    // h={50}
                    w={'50%'}
                    fontSize={24}
                    color='#fff'
                    // fontWeight={'bold'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    textAlign={'center'}
                    direction={'column'}>
                        Terima kasih atas antusias kamu untuk bergabung dengan Maxima 2022
                        <Button
                        colorScheme={'orange'}
                        borderRadius={20}
                        mt={5}
                        w={200}
                        >
                            <Link href='/'>HOME</Link>
                        </Button>
                    </Flex>
                    
                </Flex>
        </Flex>
        // <div className={styles.ty}>
        //     <h1 className={styles.typo}>TERIMA KASIH</h1>
        //     <p className={styles.pd}></p>
        //     <Link href='/'></Link>
        // </div>
     );
}
 
export default Thanks;