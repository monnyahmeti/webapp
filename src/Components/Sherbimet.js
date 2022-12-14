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
        px={{ base: 2, md: 2 }}
        py={'5'}
        shadow={'4xl'}
        borderRight={'1px'}
        borderRightColor={'gray.300'}
        // bg={'gray.200'}
        rounded={'0px'}
        >
        <Box>
        <Box
            my={'auto'}
            color={'gray.300'}
            align='center'
            justify='center'>
            {icon}
          </Box>
          <Text align='center' fontSize={'3xl'} mt='15px' fontFamily={'Ubuntu'} fontWeight='500'>{title}</Text>
          <Text align='center' fontSize='lg' mt={'18px'} fontFamily='Raleway' fontWeight={'600'}>{stat}</Text>
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
      <div className='stats'>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          fontSize={{base: '4xl', md: '5xl'}}
          align='center'
          py={10}
          fontWeight={'500'}
          fontFamily={'Montserrat'}
          color='black'>
          Sherbimet tona
        </chakra.h1>
        <br />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} color='black'>
          <StatsCard
            title={'Web Dizajn dhe Zhvillim '}
            stat={'Ne ofrojm?? sh??rbime profesionale p??r dizajnimin dhe implementimin e faqes s?? internetit, ne krijojm??  web faqe unike dhe t?? lehta p??r tu perdorur p??r perdoruesit. '}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/1329/1329016.png' w='70px' />}
          />
          <StatsCard
            title={'Dizajn Grafik'}
            stat={'Ne ofrojm?? shum?? sh??rbime te dizajnit grafik si: logo flyer, video promovuese, karta biznesore, broshura etj.'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/881/881883.png' w='70px' />}
          />
          <StatsCard
            title={'SEO'}
            stat={'P??r t?? qen?? i suksessh??m uebsajti juaj duhet t?? renditet m?? lart ne motor??t e kerkimit(psh. Google). Ata b??jn?? indeksimin e faqeve te internetit bazuar n?? key words!'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/3579/3579143.png' w='70px' />}
          />
          {/* <StatsCard
            title={'Marketing'}
            stat={"Ne kemi aft??sit?? dhe eksperienc??n p??r t'iu ndihmuar t?? persosni pozicionin tuaj dhe ekzekutoni nj?? strategji marketingu!"}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/4297/4297725.png' w='70px' />}
          /> */}
          {/* <StatsCard
            title={'Email Marketing'}
            stat={'Email ??sht?? nj?? prej metodave m?? t?? mira p??r t?? mbajtur kontakte ose p??r t?? arritur klient?? t?? rinj. Specialist??t tan?? do t?? b??jn?? t?? pamundur??n p??r ju!'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/2530/2530217.png' w='70px' />}
          /> */}
          {/* <StatsCard
            title={'Shpejtesi'}
            stat={'Ne besojm?? n?? shpejt??si por edhe siguri ne b??jm?? nj?? balanc?? t?? k??tyre dy faktor??ve t?? r??nd??sish??m!'}
            icon={<Image src='https://cdn-icons-png.flaticon.com/512/1455/1455324.png' w='70px' />}
          /> */}
        </SimpleGrid>
        <br />
      </Box>
      </div>
    );
  }