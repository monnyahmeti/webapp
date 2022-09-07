import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
    Textarea,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import Style from '../Styling/Style.css';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        w={'full'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'3xl'} py={12} px={2}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Jeni të interesuar në sherbimet tona?
            </Heading>
            <Text mt={'20px'}fontSize={'lg'} color={'gray.600'} align='center'>
              Plotesoni formularin më poshtë që të na kontaktoni ne. Ne jemi të gatshëm të ju ndihmojmë që të arrini qëllimet tuaja.
            </Text>
          </Stack>
          <Box
            // maxW={'3xl'}
            rounded={'lg'}
            p={6}>
            <Stack spacing={2}>
              <HStack flexDirection={{base: 'column', md: 'row'}}>
                <Box  w={{base: 'full', md: '50%'}} ml={{base: '6px'}}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Emri</FormLabel>
                    <Input type="text"  rounded='1px'  border={'2px'} borderColor={'blackAlpha.600'}/>
                  </FormControl>
                </Box>
                <Box  w={{base: 'full', md: '50%'}}>
                  <FormControl id="lastName" isRequired>
                    <FormLabel mt={{base: '5px', md: '0px'}}>Mbiemri</FormLabel>
                    <Input type="text" rounded='1px' border={'2px'} borderColor='blackAlpha.600'/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired >
                <FormLabel ml={{base: '6px'}}>Email adresa</FormLabel>
                <Input type="email"  ml={{base: '4px'}} border={'2px'} borderColor='blackAlpha.600' rounded={'1px'}/>
              </FormControl>
              <HStack flexDirection={{base: 'column', md: 'row'}}>
                <Box  w={{base: 'full', md: '50%'}}>
                  <FormControl id="phoneNumber" isRequired>
                    <FormLabel ml={{base: '6px'}}>Numri i telefonit</FormLabel>
                    <Input type="text" ml={{base: '4px'}} rounded='1px' border={'2px'} borderColor='blackAlpha.600'/>
                  </FormControl>
                </Box>
                <Box w={{base: 'full', md: '50%'}}>
                <FormControl id="zgjedhni-option" isRequired>
                    <FormLabel mt={{base: '7px', md: '0px'}} >Për çfarë shërbimesh jeni i interesuar</FormLabel>
                    <Select placeholder='Ju lutem zgjedhni' rounded='1px' border={'2px'} borderColor='blackAlpha.600'>
                      <option value='option1'>Web Dizajn</option>
                      <option value='option2'>Dizajn Grafik</option>
                      <option value='option3'>Sherbime SEO</option>
                      <option value='option3'>Marketing</option>
                      <option value='option3'>Tjetër</option>
                    </Select> 
  
                  </FormControl>
                {/* <Select placeholder='Ju lutem zgjedhni'>
                  <option value='option1'>Web Dizajn</option>
                  <option value='option2'>Dizajn Grafik</option>
                  <option value='option3'>Sherbime SEO</option>
                  <option value='option3'>Marketing</option>
                  <option value='option3'>Tjetër</option>
                </Select> */}
  
                </Box>
              </HStack>
              <FormControl id="detajet-textarea">
                  <FormLabel ml={{base: '6px'}}>Detajet e projektit</FormLabel>
                  <Textarea placeholder='Këtu shkruani detajet e projektit tuaj' ml={{base: '4px'}} minH={'15vh'} rounded='1px' border={'2px'} borderColor='blackAlpha.600'/>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blackAlpha.800'}
                  color={'white'}
                  rounded={'3px'}
                  _hover={{
                    bg: 'black',
                  }}>
                  Dërgo
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }