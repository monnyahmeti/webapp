import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text,
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import Style from '../Styling/Style.css';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        // border={'1px solid'}
        // bg={'gray.900'}
        borderColor={'gray.600'}
        rounded={'lg'}>
        <Box>
        <Box
            my={'auto'}
            color={'gray.300'}
            align='center'
            justify='center'>
            {icon}
          </Box>
          <Text align='center' fontSize={'3xl'} mt='15px' fontFamily={'Ubuntu'} fontWeight='800'>{title}</Text>
          <Text align='center' fontSize='lg' mt={'20px'} ml={'5px'}>{stat}</Text>
        </Box>
        {/* <Flex justifyContent={'space-between'}>
          
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box> */}
          {/* <Box
            my={'auto'}
            color={'gray.300'}
            alignContent={'center'}>
            {icon}
          </Box> */}
        {/* </Flex> */}
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <div className='zgjidhnine'>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        fontSize={{base: '4xl', md: '5xl'}}
        align='center'
        py={10}
        fontWeight={'600'}
        fontFamily={'Quicksand'}
        color='gray.200'>
        Pse të na zgjedhni ne?
      </chakra.h1>
      <br />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} color='white'>
          <StatsCard
            title={'Siguri'}
            stat={'Sigurinë e duan të gjithë! Ne ju sigurojmë uebsajtin që ta keni nje çertifikatë SSL dhe do të mbrohen nga hakerët.'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2592/2592258.png' w='80px' />}
          />
          <StatsCard
            title={'E lehte'}
            stat={"Ne kemi principe që të zhvillojmë aplikacione të lehta për përdoruesit, sepse kur një uebsajt është i lehtë për t'u perdorur do jetë profitabil!"}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/5828/5828065.png' w='80px' />}
          />
          <StatsCard
            title={'Design'}
            stat={'Ne do të jemi dhe jemi të përgjegjshëm për ofrimin e një eksperience të paparë të perdoruesit duke ofruar dizajn të bukur!'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2620/2620971.png' w='70px' />}
          />
        </SimpleGrid>
        <br />
      </Box>
      </div>
    );
  }