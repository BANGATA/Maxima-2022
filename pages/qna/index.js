// import styles from '../../styles/Home.module.css'
import {
    Box, 
    Text, 
    Flex, 
    FormControl, 
    FormLabel, 
    Stack, Image,
    FormErrorMessage, 
    FormHelperText,
    Input, InputGroup, InputLeftAddon, InputRightAddon,
    Select, Textarea, Button
  } from '@chakra-ui/react'
  import Link from 'next/Link'
  
  import React, { useState, useRef } from 'react';
  
  import {PhoneIcon} from '@chakra-ui/icons'
  import axios from 'axios';
  
  const text = () => { 
    const [submitting, setSubmitting] = useState(false)
  
    const [error, setError] = useState([])
  
    const nim_mhs = useRef()
    const name = useRef()
    const email = useRef()
    const divisiID = 10
    const no_hp = useRef()
    const tempat_lahir = useRef()
    const tanggal_lahir = useRef()
    const jenis_kelamin = useRef()
    const alamat = useRef()
    const angkatan = useRef()
    const prodi = useRef()
    const ips = useRef()
    const line = useRef()
    const instagram = useRef()
    const transkrip_nilai = useRef()
    const soal1 = useRef()
    const soal2 = useRef()
    const soal3 = useRef()
    const portofolio = useRef()
  
    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
          
      let registerData
  
      if(transkrip_nilai.current.files.length === 0){
        registerData = {
          nim_mhs:nim_mhs.current.value,
          name:name.current.value,
          email:email.current.value,
          divisiID,
          no_hp:no_hp.current.value,
          tempat_lahir:tempat_lahir.current.value,
          tanggal_lahir:tanggal_lahir.current.value,
          jenis_kelamin:jenis_kelamin.current.value,
          alamat:alamat.current.value,
          angkatan:angkatan.current.value,
          prodi:prodi.current.value,
          ips:ips.current.value,
          line:line.current.value,
          instagram:instagram.current.value,
          transkrip_nilai:undefined,
          soal1:soal1.current.value,
          soal2:soal2.current.value,
          soal3:soal3.current.value,
          portofolio:file2
        }
      } else if(portofolio.current.files.length === 0){
        registerData = {
          nim_mhs:nim_mhs.current.value,
          name:name.current.value,
          email:email.current.value,
          divisiID,
          no_hp:no_hp.current.value,
          tempat_lahir:tempat_lahir.current.value,
          tanggal_lahir:tanggal_lahir.current.value,
          jenis_kelamin:jenis_kelamin.current.value,
          alamat:alamat.current.value,
          angkatan:angkatan.current.value,
          prodi:prodi.current.value,
          ips:ips.current.value,
          line:line.current.value,
          instagram:instagram.current.value,
          transkrip_nilai:file1,
          soal1:soal1.current.value,
          soal2:soal2.current.value,
          soal3:soal3.current.value,
          portofolio:undefined
        }
      } else if(transkrip_nilai.current.files.length === 0 && portofolio.current.files.length === 0){
        registerData = {
          nim_mhs:nim_mhs.current.value,
          name:name.current.value,
          email:email.current.value,
          divisiID,
          no_hp:no_hp.current.value,
          tempat_lahir:tempat_lahir.current.value,
          tanggal_lahir:tanggal_lahir.current.value,
          jenis_kelamin:jenis_kelamin.current.value,
          alamat:alamat.current.value,
          angkatan:angkatan.current.value,
          prodi:prodi.current.value,
          ips:ips.current.value,
          line:line.current.value,
          instagram:instagram.current.value,
          transkrip_nilai:undefined,
          soal1:soal1.current.value,
          soal2:soal2.current.value,
          soal3:soal3.current.value,
          portofolio:undefined
        }
      } else{
        registerData = {
          nim_mhs:nim_mhs.current.value,
          name:name.current.value,
          email:email.current.value,
          divisiID,
          no_hp:no_hp.current.value,
          tempat_lahir:tempat_lahir.current.value,
          tanggal_lahir:tanggal_lahir.current.value,
          jenis_kelamin:jenis_kelamin.current.value,
          alamat:alamat.current.value,
          angkatan:angkatan.current.value,
          prodi:prodi.current.value,
          ips:ips.current.value,
          line:line.current.value,
          instagram:instagram.current.value,
          transkrip_nilai:file1,
          soal1:soal1.current.value,
          soal2:soal2.current.value,
          soal3:soal3.current.value,
          portofolio:file2
        }
      }
      
      try{
        const res = await axios.post('http://localhost:8080/api/mhs/register', registerData)
    
        console.log(res)
      } catch(err){
        console.log(err.response.data)
        setError(err.response.data)
      }
  
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    }
  
    return (
      <Flex 
        minHeight={'100vh'} 
        width={'100%'} 
        // bgGradient={'linear(to-tr, yellow.100, blue.300)'} 
        bgImage={'/bgform.jpeg'}
        bgSize={'cover'}
        bgPosition={'center'}
        position={'relative'}
        bgRepeat={'no-repeat'}
        justifyContent={'center'} 
        direction={'column'}
        alignItems={'center'}>
        <Flex 
          borderRadius={30} 
          height={'80vh'} 
          width={['90%', '90%', '70%']}
          overflow={'auto'} 
          p={6} direction={'column'} bgColor={'white'}>
          <Stack>
            <Flex 
              justifyContent={'center'}
              alignItems={'center'}
              direction={'column'}> 
              <Image 
                src='/Logo_MXM.png'
                objectFit={'cover'}
                boxSize={'100px'}
                alt='Logo_MXM_2022'
              />
            </Flex>
            {submitting ? <div>Submitting Form...</div> : <div></div>}
            <form flexDirection={['column', 'column', 'row', 'row']} display={'flex'} flexDirection={'column'} onSubmit={handleSubmit}>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='nim_mhs'>NIM</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='000000' bgColor={'gray.500'}/>
                    <Input type={'number'} ref={nim_mhs} placeholder='32456' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  </InputGroup>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='name'>Nama Lengkap</FormLabel>
                  <Input type={'text'} ref={name} placeholder='Agus Salim' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='email'>Email</FormLabel>
                  <Input type={'email'} ref={email} placeholder='agus.salim@student.umn.ac.id' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='no_hp'>Nomor HP</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='+62' bgColor={'gray.500'}/>
                    <Input type={'number'} ref={no_hp} placeholder='847585947' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                  </InputGroup>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='tempat_lahir'>Tempat Lahir</FormLabel>
                  <Input type={'text'} ref={tempat_lahir} placeholder='Pontianak' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='tanggal_lahir'>Tanggal Lahir</FormLabel>
                  <Input type={'date'} ref={tanggal_lahir} placeholder='Pontianak' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='jenis_kelamin'>Jenis Kelamin</FormLabel>
                  <Select ref={jenis_kelamin} placeholder='Jenis Kelamin' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}>
                    <option value='Male'>L</option>
                    <option value='Female'>P</option>
                  </Select>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='alamat'>Alamat</FormLabel>
                  <Input type={'text'} ref={alamat} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='angkatan'>Angkatan</FormLabel>
                  <Input type={'number'} ref={angkatan} placeholder='2019' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='prodi'>Prodi</FormLabel>
                  <Select ref={prodi} placeholder='prodi' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}>
                    <option value='Informatika'>Informatika</option>
                    <option value='Sistem Informasi'>Sistem Informasi</option>
                    <option value='Sistem Komputer'>Sistem Komputer</option>
                    <option value='Manajemen'>Manajemen</option>
                    <option value='Akuntansi'>Akuntansi</option>
                    <option value='Ilkom'>Ilmu Komunikasi</option>
                    <option value='DKV'>DKV</option>
                  </Select>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='ips'>Nilai Ips</FormLabel>
                  <Input type={'number'} step={'any'} ref={ips} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='line'>line</FormLabel>
                  <Input type={'text'} ref={line} placeholder='agusline' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='instagram'>Instagram</FormLabel>
                  <Input type={'text'} ref={instagram} placeholder='Isi tanpa @' _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='transkrip_nilai'>Screenshoot Transkrip Nilai</FormLabel>
                  <Input type={'file'} ref={transkrip_nilai} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'} onChange={(e)=>setFile1(e.target.files[0])}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal1'>Menurut kamu apa arti "Neverland"?</FormLabel>
                  <Textarea type={'text'} ref={soal1} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal2'>Harapan kamu untuk MAXIMA 2022?</FormLabel>
                  <Textarea type={'text'} ref={soal2} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='soal3'>pertanyaan3</FormLabel>
                  <Textarea type={'text'} ref={soal3} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box width={'100%'} mr={2} ml={2}>
                  <FormLabel textColor={'black'} htmlFor='portofolio'>upload divisi</FormLabel>
                  <Input type={'file'} ref={portofolio} _placeholder={{color: 'darkgray'}} bgColor={'gray.200'} textColor={'black'} onChange={(e)=>setFile2(e.target.files[0])}/>
                </Box>
              </Flex>
              <Flex justifyContent={'space-between'} mt={5}>
                <Box mr={2} ml={2}>
                  <Link href='/danke'><Button type="submit" textColor= 'black' bgGradient={'linear(to-tr, yellow.100, blue.300)'} _hover={{bgGradient: "linear(to-tr, yellow.100, blue.300)"}}>Submit</Button></Link>
                </Box>
              </Flex>
            </form>
          </Stack>
        </Flex>
      </Flex>
    )
  }
 
export default text;