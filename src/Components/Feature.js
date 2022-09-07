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
  import Style from '../Styling/Style.css';

  export default function CallToActionWithVideo() {
    return (
      <Box bg="#07071B" color='gray.100'>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 5, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} ml={{base: '2', md: '0'}}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', lg: '3xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontFamily={'Poppins'}
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
                Ne krijojmë faqe interneti efektive
              </Text>
            </Heading>
              <Image
                display={{base: 'block', md: 'none'}}
                alt={'Developer Image'}
                fit={'cover'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                }
              />
            <Text color={'gray.100'} fontFamily='Poppins' fontWeight={'400'}>
            Nga koncepti në zbatim: Ne krijojmë uebsajt të dizajnuar me porosi që pasqyrojnë identitetin tuaj
            të korporatës dhe arrijnë me efikasitet një normë të lartë konvertimi. Uebsajtet tona kanë të bëjnë
            më shumë sesa thjesht dizajne tërheqëse.
            </Text>
            <Text color='gray.100' fontFamily='Poppins' fontWeight={'normal'}>
            Zhvillimi i një faqe interneti duhet të marrë parasysh përvojën e përdoruesit. Nëpërmjet një qasjeje 
            të konsideruar dhe të plotë ndaj dizajnit të uebit, ne rrisim përdorshmërinë e faqes së internetit dhe
            inkurajojmë ndërveprimet e dëshiruara nga vizitorët e faqes. Me përvojën tonë, ne jemi në gjendje të 
            ofrojmë strategji të provuara që maksimizojnë normat e konvertimit. Dizajni i duhur i uebit i zbatuar
            nga një zhvillues profesionist i uebit padyshim që do të rrisë suksesin e biznesit tuaj.
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
                // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
                >
                How It Works
              </Button>
            </Stack> */}
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              display={{base: 'none', md: 'block'}}
              position={'relative'}
              height={'300px'}
              rounded={'3px'}
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
                  'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      </Box>
    );
  }