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
        Pse t?? na zgjedhni ne?
      </chakra.h1>
      <br />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} color='white'>
          <StatsCard
            title={'Siguri'}
            stat={'Sigurin?? e duan t?? gjith??! Ne ju sigurojm?? uebsajtin q?? ta keni nje ??ertifikat?? SSL dhe do t?? mbrohen nga haker??t.'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2592/2592258.png' w='80px' />}
          />
          <StatsCard
            title={'E lehte'}
            stat={"Ne kemi principe q?? t?? zhvillojm?? aplikacione t?? lehta p??r p??rdoruesit, sepse kur nj?? uebsajt ??sht?? i leht?? p??r t'u perdorur do jet?? profitabil!"}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/5828/5828065.png' w='80px' />}
          />
          <StatsCard
            title={'Design'}
            stat={'Ne do t?? jemi dhe jemi t?? p??rgjegjsh??m p??r ofrimin e nj?? eksperience t?? papar?? t?? perdoruesit duke ofruar dizajn t?? bukur!'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2620/2620971.png' w='70px' />}
          />
        </SimpleGrid>
        <br />
      </Box>
      </div>
    );
  }