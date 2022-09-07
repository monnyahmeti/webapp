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
          color={'white'}
          >
          {icon}
        </Flex>
        <Text fontWeight={600} color={'white'} fontSize={'xl'} fontFamily={'Raleway'} textAlign={'center'}>{title}</Text>
        {/* <Divider mt={12} mb={12} w={'200px'} /> */}
        <Text color={'gray.50'} fontSize={'md'} fontWeight={'normal'} align='center' fontFamily={'Montserrat'}>{text}</Text>
      </Stack>
    );
  };

  
  export default function stats() {
    return (
      <div className='body'>
      <Box  p={5}>
        <SimpleGrid columns={{ base: 1, md: '4' }} 
        ml={{base: '0px', md: '100px', lg: '300px'}}
        padding={2} 
        spacing={{base: 14, md: 20}}
        >
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/7928/7928678.png' w='45px' h='45px' />}
            title={'Profesionalizmi'}
            text={'Faqet e internetit të programuara mirë me dizajne me cilësi të lartë'}
          />
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2838/2838614.png' w='45px' h='45px' />}
            title={'Mbështetja'}
            text={'Ne ofrojmë mbështetje afatgjatë për të gjitha faqet e internetit që ndërtojmë'}
          />
          <Feature
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2361/2361682.png' w='45px' h='45px' />}
            title={'Optimizimi'}
            text={'Të gjitha faqet e internetit janë të optimizuara për motorët e kërkimit dhe shpejtësinë'}
          />
        </SimpleGrid>
      </Box>
      </div>
    );
  }