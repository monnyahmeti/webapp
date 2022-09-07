import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import Style from '../Styling/Style.css';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <div class='navbar'>
      <Box>
        <Flex
          bg={'#07071B'}
          color={useColorModeValue('gray.600', 'white')}
          minH={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={'gray.800'}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'space-around' }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('white', 'white')}>
              SinnoloStore
            </Text> */}
            <Image src='https://scontent.xx.fbcdn.net/v/t1.15752-9/304892051_853632162198407_7786141426378910769_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=pEbaLkKoOm4AX_L2_44&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJEiK8UM81TTjIPUjOpMUJa7E8pTbSbbhh4yL8Fv7ALUA&oe=633CFB3F' w={'40px'} h={'39px'}/>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={0}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0.23 }}
            direction={'row'}
            justify={{base: 'space-around', md: 'flex-start'}}
            spacing={6}>
            <Button
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'md'}
              // size={{base: 'sm', md: ''}}
              p={'-5px 20px'}
              size={'sm'}
              fontWeight={400}
              color={'gray.800'}
              bg={'#29cb8b'}
              rounded={'2px'}
              href={'#'}
              _hover={{
                opacity: '90%',
              }}>
              Rezervo
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      </div>
    );
  }
  
  const DesktopNav = () => {
    // const linkColor = useColorModeValue('white', 'white');
    const linkHoverColor = useColorModeValue('#29cb8b', '#29cb8b');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'15px'}
                  fontWeight={500}
                  color={'#EAECEF'}
                  fontFamily={'Montserrat'}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={'#181A20'}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={'gray.200'}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Kryefaqja',
      href: '/'
    },
    {
      label: 'Cmimet',
      
    },
    {
      label: 'Kontakti',
      href: '#',
    },
    // {
    //   label: '',
    //   href: '#',
    // },
  ];