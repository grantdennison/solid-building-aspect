import React, { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  Avatar,
  Flex,
  Text,
  Spacer,
  Link,
  Image,
  VStack,
  HStack,
  Stack,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Icon,
} from '@chakra-ui/react';
// import './Header.css';
import logo from '../../images/logo1.png';
import navBack from '../../images/nav top.png';
import sam from '../../images/Sam.png';
import emailIcon from '../../images/header/email.png';
import facebook from '../../images/header/facebook.png';
import linkedin from '../../images/header/linkedin.png';
import phone from '../../images/header/phone.png';
import bars from '../../images/header/bars.png';

const socials = [
  {
    icon: emailIcon,
    url: 'mailto: sam@solidbuildingaspect.co.uk',
  },
  {
    icon: linkedin,
    url: 'https://www.linkedin.com/in/sami-selimi-7b2733131/?originalSubdomain=uk',
  },
  {
    icon: facebook,
    url: 'https://www.facebook.com/solidbuildingaspect?locale=en_GB',
  },
  {
    icon: phone,
  },
];

const navBars = [
  { name: 'home', heading: 'Home' },
  { name: 'services', heading: 'Services' },
  { name: 'projects', heading: 'Projects' },
  { name: 'about', heading: 'About' },
  { name: 'contact-me', heading: 'Contact Me' },
];

const themeGradient = {
  bgGradient: 'linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)',
  bgClip: 'text',
};

export default function Header() {
  const headerRef = useRef(null);
  const [wDevice] = useMediaQuery('(min-width: 990px)');
  const [hDevice] = useMediaQuery('(min-height: 600px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos || currentScrollPos < 180) {
        headerElement.style.transform = 'translateY(0)';
      } else {
        headerElement.style.transform = 'translateY(-180px)';
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = anchor => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      const navBarHeight = 100; // Adjust this value to the height of your fixed navigation bar

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - navBarHeight;

      window.scrollTo({
        top: window.scrollY + offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Flex id="home-section">
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        bgImg={navBack}
        bgPos={'center'}
        bgSize={'cover'}
        shadow={'inset 0 0 0 118px rgba(0,0,0,0.87)'}
        height={170}
        ref={headerRef}
        p={2}
        zIndex={100}
        // minW="670px"
        // justifyContent={"center"}
      >
        <Flex color="white" w={3000}>
          {/* ##### Main Logo Start #### */}
          <Flex maxW={'280'}>
            <VStack justify={'center'}>
              <Image pt={2} src={logo} alt="logo" />
              <Text mt={-2} fontSize={['8px', '4vw', '21px']}>
                Your Trusted Subcontractor
              </Text>
            </VStack>
          </Flex>
          <Spacer />

          {/* ##### Main Logo End #### */}
          <VStack justify="flex-end">
            <Flex
              px={4}
              pt={1}
              className="nav_bar"
              direction={wDevice ? 'row' : 'column'}
            >
              {/* #### Avitar and Name Start #### */}
              <HStack>
                <Avatar name="Sam Salimi" src={sam} boxSize={wDevice?24:20} />
                <Flex {...themeGradient}>
                  <Stack>
                    <Text fontSize={['20px', '3vw', '40px']}>SAM SALIMI</Text>
                    <Text mt={-3} fontSize={['12px', '3vw', '30px']}>
                      Director
                    </Text>
                  </Stack>
                </Flex>
              </HStack>
              {/* #### Avitar and Name End #### */}

              {/* #### Social Icons Start #### */}
              <Flex
                className="icon_cont"
                w={200}
                alignSelf={'flex-end'}
                justifyContent={'space-between'}
              >
                {socials.map((social, index) => (
                  <Link
                    href={social.url}
                    key={index}
                    _hover={{
                      transform: 'scale(1.4)',
                    }}
                  >
                    <Icon as={Image} src={social.icon} className="icon" boxSize={7} />
                  </Link>
                ))}
                <Flex
                  ref={btnRef}
                  onClick={onOpen}
                  display={['flex', 'flex', 'flex', 'none']}
                  key={'bars'}
                  mt={-2}
                  _hover={{
                    transform: 'scale(1.4)',
                  }}
                >
                  <Icon as={Image} src={bars} alt="email" boxSize={10}></Icon>
                </Flex>
              </Flex>
              {/* #### Social Icons End #### */}
            </Flex>

            {/* #### Navigation Bar Start horizontal #### */}

            <Flex display={['none', 'none', 'none', 'flex']}>
              <Flex
                justifyContent={'space-between'}
                spacing={8}
                fontSize={25}
                fontWeight="bold"
                minW={550}
              >
                {navBars.map(navName => (
                  <Link
                    href={`/#${navName.name}`}
                    onClick={() => {
                      handleClick(navName.name);
                    }}
                    key={navName.name}
                    _hover={{ ...themeGradient, transform: 'scale(1.2)' }}
                  >
                    {navName.heading}
                  </Link>
                ))}
              </Flex>
            </Flex>
            {/* #### Navigation Bar End hrizontal #### */}
          </VStack>
        </Flex>
      </Flex>
      <Drawer
        // isFullHeight="false"
        // height={400}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent 
        bg='gray.700'        
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <Avatar name="Sam Salimi" src={sam} boxSize={hDevice?24:14} />
              <Flex {...themeGradient}>
                <Stack>
                  <Text fontSize={20}>SAM SALIMI</Text>
                  <Text mt={-3} fontSize={15}>
                    Director
                  </Text>
                </Stack>
              </Flex>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction={'column'} fontSize={hDevice?25:15} color='white' fontWeight="bold">
              {navBars.map(navName => (
                <Link
                  href={`/#${navName.name}`}
                  onClick={() => {
                    handleClick(navName.name);
                    onClose();
                  }}
                  key={navName.name}
                  p={2}
                  _hover={{ ...themeGradient, transform: 'scale(1.1)' }}
                >
                  {navName.heading}
                </Link>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter display={hDevice?'flex':'none'}>
            <Flex maxW={'280'}>
              <VStack>
                <Image pt={2} src={logo} alt="logo" />
                <Text mt={-2} fontSize={22}>
                  Your Trusted Subcontractor
                </Text>
              </VStack>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
