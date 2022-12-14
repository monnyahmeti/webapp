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
  
  export default function CallToActionWithVideo() {
    return (
      <Box bg='#07071B'>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
            <Flex
            display={{base: 'block', md: 'none'}}
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'0px'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1602457876022-a9e39ad1b0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} ml={{base: '5', md: '0'}}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color='gray.100'
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                fontFamily='Montserrat'
                position={'relative'}
                color='gray.100'
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                //   bg: 'red.400',
                  zIndex: -1,
                }}>
                About us
              </Text>
            </Heading>
            <Text color={'gray.100'} fontWeight='normal'>
            Ne jemi nj?? agjenci e vog??l e zhvillimit t?? softuerit dhe marketingut n?? internet me baz?? n?? Pristina, Kosov??. 
            Q?? nga fillimi yn?? n?? 2018 ne kemi zhvilluar partneritete t?? q??ndrueshme me klient?? dhe individ?? t?? talentuar n?? mbar?? bot??n.
            </Text>
            <Text color='gray.100'>
                 q?? na dallon ??sht?? fokusi yn?? te cil??sia, nj?? model biznesi i holl?? dhe i shkall??zuar dhe ofrimi i sh??rbimit personal nga fillimi n?? fund.
            </Text>
            {/* <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}>
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                >
                How It Works
              </Button>
            </Stack> */}
          </Stack>
          <Flex
            display={{base: 'none', md: 'block'}}
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'0px'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1602457876022-a9e39ad1b0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
        <br /><br />
      </Container>
      </Box>
    );
  }
  