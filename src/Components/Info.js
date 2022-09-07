import {
    Box,
    Text,
    Image,
    HStack,
    Stack,
    Link,
} from '@chakra-ui/react';
import Style from '../Styling/Style.css';


export default function Info() {
    return (
        <Box bg={'#07071B'} p={'5px 0px'}>
        <HStack spacing='6px'  align='center' justify='center' h='40px'>
  <Box w='20px'>
    <Link href='/'>
        <Image src='https://www.countryflags.com/wp-content/uploads/albania-albanian-flag-png-square-large.png' w='18px' h={'14px'} />
    </Link>
  </Box> 
  <Box borderRight={'2px'} borderRightColor={'white'} w={{base: '30px', md: '30px'}} h={{base: '15px', md: '23px'}} fontFamily={'Montserrat'} fontWeight='600' color='#fff' fontSize={{base: '11px', md: '16px'}} mt='10px'>
    <Link href='/en'>
        <Image src='https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png' w='18px' h={'14px'} mt={{base: '1px', md: '5px'}}/>
    </Link>
  </Box>
  {/* <Box bg={'gray.800'} w='20px'>
    <Image src='https://cdn-icons-png.flaticon.com/512/3938/3938039.png' w='16px' h='11px' />
  </Box> */}
  
  <Box w='23px'>
    <Image src='https://cdn-icons-png.flaticon.com/512/2504/2504948.png' w='19px' h='auto' ml={'5px'}/>
  </Box>
  <Box borderRight={'2px'} borderRightColor={'white'} w={{base: '95px', md: '135px'}} h={{base: '15px', md: '23px'}} fontFamily={'Montserrat'} fontWeight='600' color='#fff' fontSize={{base: '11px', md: '16px'}} mt='10px'>
    +383 45 212 492
  </Box>
  <Box display={'inline-flex'} w={{base: '120px', md: '250px'}}  h={{base: '15px', md: '23px'}} fontFamily={'Montserrat'} fontWeight='600' color='#fff' fontSize={{base: '11px', md: '16px'}}>
    <Image src='https://cdn-icons-png.flaticon.com/512/2875/2875394.png' w='25px' h={{base: '18px', md: '24px'}} ml={'5px'}/>
    <Text ml={'5px'}>sinnolo@gmail.com</Text>
  </Box>
  {/* <Box w={{base: '120px', md: '250px'}} h={{base: '15px', md: '23px'}} fontFamily={'Montserrat'} fontWeight='600' color='#fff' fontSize={{base: '11px', md: '16px'}}>
    sinnolo@gmail.com
  </Box> */}
</HStack>
</Box>
    );
}