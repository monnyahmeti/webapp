import { ReactElement } from 'react';
import { 
  Box, 
  SimpleGrid, 
  Icon, 
  Text, 
  Stack, 
  Flex, 
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Td,
  Tbody,
  Tfoot, 
  Image,
} from '@chakra-ui/react';
import { FcCurrencyExchange, FcDebt, FcNightPortrait, FcClock, FcAssistant, FcEngineering} from 'react-icons/fc';
import { FaHeadphones } from 'react-icons/fa';
// import Style from './Style.css';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
  }
  const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={'full'}
          h={10}
          justify='center'
          color={'gray.100'}
          >
          {icon}
        </Flex>
        <Text fontWeight={600} color={'gray.100'} fontSize={'2xl'} fontFamily={'Raleway'} textAlign={'center'}>{title}</Text>
        {/* <Divider mt={12} mb={12} w={'200px'} /> */}
        <Text color={'gray.100'} fontSize={'lg'} fontWeight={'normal'} align='center'>{text}</Text>
      </Stack>
    );
  };

  
  export default function stats() {
    return (
      <div className='body'>
      <Box bg={'#07071B'} p={20}>
      <Text align='center' fontSize={{base: '2xl', md: '3xl'}} fontWeight={'bolder'} color='gray.100' fontFamily={'Poppins'}>Çfarë mund të presësh nga ne?</Text>
        <SimpleGrid columns={{ base: 1, md: '4' }}
        ml={{base: '0px', md: '100px', lg: '300px'}}
        mt={16}
        padding={2} 
        spacing={{base: 14, md: 20}}
        >
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/190/190811.png' w='45px' h='45px' />}
            title={'Cilësi'}
            text={'Faqet e internetit të programuara mirë me dizajne me cilësi të lartë'}
          />
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/3315/3315183.png' w='45px' h='45px' />}
            title={'Partneritet'}
            text={'Ne ofrojmë mbështetje afatgjatë për të gjitha faqet e internetit që ndërtojmë'}
          />
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2786/2786599.png' w='45px' h='45px' />}
            title={'Besueshmëri'}
            text={'Të gjitha faqet e internetit janë të optimizuara për motorët e kërkimit dhe shpejtësinë'}
          />

        </SimpleGrid>
      </Box>
      </div>
    );
  }