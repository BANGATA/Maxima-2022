import Link from 'next/link'
import { 
    Img, 
    Flex,
    Text,
    Button 
} from '@chakra-ui/react'

const Fou = () => {
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
        position={'relative'}
        flexWrap={'wrap'}
        zIndex={1}>
            <Link href='/daftar/hal3'><Button
            bgColor={'orange.200'}
            borderRadius={20}>{"<"}</Button>
            </Link>
            <Flex
            direction={'column'}>
                <Flex>
            <Link href='/noporto/publikasi'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='/Logo_MXM.png' 
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
                    fontWeight={'bold'}>PUBLIKASI</Text>
                </Flex>
            </Flex>
            </a>
            </Link>
            <Link href='/noporto/medrel'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='/Logo_MXM.png' 
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
                    fontWeight={'bold'}>MEDIA RELATION</Text>
                </Flex>
            </Flex>
            </a></Link>
            <Link href='/noporto/seccom'><a><Flex 
            boxShadow={'dark-lg'}
            borderRadius={20}
            bgColor={'white'}
            w={300}
            h={400}
            margin={10}
            direction={'column'}>
                <Flex>
                <Img src='/Logo_MXM.png' 
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
                    fontWeight={'bold'}>{"SECURITY & ACCOMODATION"}</Text>
                </Flex>
            </Flex>
            </a>
            </Link>
            </Flex>
            <Flex
            fontSize={20}
            fontWeight={'bold'}
            justifyContent={'center'}
            >4</Flex>
            </Flex>
            <Link href='/daftar'>
            <Button
            bgColor={'orange.200'}
            borderRadius={20}>{">"}</Button>
            </Link>
        </Flex>
    );
}

export default Fou;