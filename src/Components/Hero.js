import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import ThreeCols from './ThreeCols';
import Style from '../Styling/Style.css';

export default function Hero() {
    return (
        <div className='hero'>
    {/* <Box 
    > */}
    <Container maxW={'7xl'}>
        {/* <Box></Box> */}
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
        ml={1}>
           {/* <Image
                display={{base: 'block', md: 'none'}}
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'59%'}
                h={'40%'}
                src={
                  'https://toka.b-cdn.net/wp-content/uploads/2022/04/earstcg.png'
                }
              /> */}
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.2}
            fontWeight={'500'}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              fontSize={{base: '3xl', sm: '4xl', lg: '5xl'}}
              color='gray.100'
              position={'relative'}
              fontFamily={'Poppins'}
             >
               Webdesign & Online
               </Text>
            <Text color='gray.100' mt={2} fontSize={{base: '3xl', sm: '3xl', lg: '5xl'}} lineHeight='1.4' fontFamily={'Poppins'}>Marketing Agency</Text>
            <Text mt={7}color='gray.100' w={{base: '300px', md: '500px'}} fontSize='lg' fontWeight={'normal'}><strong>Marketing i suksesshëm në internet për bizneset. </strong> 
            Ne krijojmë faqe interneti moderne dhe zhvillojmë strategjitë e duhura të marketingut në internet për të maksimizuar rritjen e klientëve.
          </Text>
          </Heading>
          {/* <Text color='gray.100' w={{base: '300px', md: '500px'}} fontSize='lg'><strong>Marketing i suksesshëm në internet për bizneset. </strong> 
            Ne krijojmë faqe interneti moderne dhe zhvillojmë strategjitë e duhura të marketingut në internet për të maksimizuar rritjen e klientëve.
          </Text> */}
          <Text color={'gray.100'} w={{base: '300px', md: '500px'}} fontSize='lg'>
          Sinnolo është agjensia juaj e besueshme në internet për dizajnin e uebit, optimizimin e motorëve të kërkimit (SEO), marketingun online. Ne jemi të specializuar në krijimin e faqeve.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', md: 'row' }}>
            <Button
              rounded={'3px'}
              size={'lg'}
              fontFamily={'Montserrat'}
              fontWeight={'600'}
              // p={{base: '25px 20px', md: '25px 20px'}}
              bg={'#29cb8b'}
              className='btn-sherbimet'
              _hover={{ bg: 'blue.500' }}>
              Interesohem per Uebsajt
            </Button>
            <Button
              rounded={'3px'}
              fontFamily={'Montserrat'}
              size={'lg'}
              fontWeight={'600'}
              // p={{base: '25px 20px', md: '25px 20px'}}
              colorScheme={'red'}
              bg={'#fff'}
              color='#111'
              _hover={{ bg: 'blue.500' }}>
              Interesohem per SEO/Marketing
            </Button>
          </Stack>
        </Stack>
        <Flex
            flex={2}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
              <Image
                display={{base: 'none', md: 'block'}}
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'78%'}
                h={'90%'}
                src={
                  'https://toka.b-cdn.net/wp-content/uploads/2022/04/earstcg.png'
                }
              />
          </Flex>
      </Stack>
    </Container>
    {/* </Box> */}
    <ThreeCols />
    </div>
    );
}
