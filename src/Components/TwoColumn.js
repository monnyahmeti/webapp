import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import Style from '../Styling/Style.css';
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack mt={9}>
      {/* <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        bg={'black'}
        rounded={'full'}
        // mb={1}
        >
        {icon}
        </Flex> */}
        <Box 
        w={'full'}
        display='inline-flex'
        >
            {icon}
      <Text color={'gray.600'} color='gray.100' ml={'10px'}>{text}</Text>
      </Box>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={{base: 10, md: 20}} bg={'#07071B'}>
        <Text align='center' color='gray.200' fontSize={{base: '2xl', md: '3xl'}}  fontFamily={'Poppins'} fontWeight='bolder'>A jemi ne partneri i duhur për ju?</Text>
      <SimpleGrid  spacing={10}>
        <Stack mt={12} direction={{base: 'column', md: 'row'}} spacing={6}>
            <Box
            w='full'
            display='inline-flex'
            >
                <Icon as={MdCheckBoxOutlineBlank} w={10} h={10} color='gray.100' mt={'10px'} />
                <Text color={'gray.600'} color='gray.100' ml='10px' fontFamily='Poppins'><strong className='fillimi-ne'>Ne nuk jemi </strong>
                një agjenci me zyra të shtrenjta, ku çmimet nuk janë transparente, ku shiten konceptet e modës si 
                "Rritja-Hakimi", ku ka kosto të fshehura në çdo cep, ose ku gjithmonë ju thuhet saktësisht se 
                çfarë dëshironi të dëgjoni.
                </Text>
                
            </Box>
            <Box w='full' display='inline-flex'>
              <Icon as={MdCheckBox} w={10} h={10} color='gray.100' mt={'10px'} />
              <Text color={'gray.600'} color='gray.100' ml='10px'><strong className='fillimi-ne'>Ne jemi </strong>
              një agjenci moderne, ku cilësia dhe qëndrueshmëria janë më të rëndësishme se suksesi jetëshkurtër.
              Ne përpiqemi dhe vlerësojmë partneritete të frytshme. Ne ju këshillojmë sinqerisht dhe mos u përpiqni
              t'ju shisni gjëra që nuk do të kishin një kosto-përfitim për ju. Ne premtojmë vetëm atë që mund të realizojmë.
              </Text>
            </Box>
        </Stack>
        {/* <Feature
          icon={<Icon as={MdCheckBoxOutlineBlank} w={10} h={10} color='gray.100' mt={'10px'}/>}
          title={'Lifetime Support'}
          text={'Ne nuk jemi një agjenci me zyra të shtrenjta, ku çmimet nuk janë transparente, ku shiten konceptet e modës si "Rritja-Hakimi", ku ka kosto të fshehura në çdo cep, ose ku gjithmonë ju thuhet saktësisht se çfarë dëshironi të bëni. dëgjojnë.'}
        />
        <Feature
          icon={<Icon as={MdCheckBox} w={10} h={10} color='gray.100' mt={'10px'}/>}
          title={'Unlimited Donations'}
          text={
            "Ne jemi një agjenci moderne, ku cilësia dhe qëndrueshmëria janë më të rëndësishme se suksesi jetëshkurtër. Ne përpiqemi dhe vlerësojmë partneritete të frytshme. Ne ju këshillojmë sinqerisht dhe mos u përpiqni t'ju shisni gjëra që nuk do të kishin një kosto-përfitim për ju. Ne premtojmë vetëm atë që mund të realizojmë."
          }
        /> */}
      </SimpleGrid>
    </Box>
  );
}