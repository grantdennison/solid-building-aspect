import React, { useEffect, useRef, useState } from 'react';
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

import { FaMobile, FaEnvelope, FaMapLocationDot } from 'react-icons/fa6';

import logo from '../../images/logo1.png';
import navBack from '../../images/nav top.png';
import sam from '../../images/Sam.png';
import bars from '../../images/header/bars.png';

const contacts = {
  email: {
    icon: FaEnvelope,
    url: 'mailto: sam@solidbuildingaspect.co.uk',
    name: 'sam@solidbuildingaspect.co.uk',
  },
  mobile: {
    icon: FaMobile,
    name: '07737551182',
  },
  loc: {
    icon: FaMapLocationDot,
    name: 'London',
  },
};

const navBars = [
  { name: 'home', heading: 'Home' },
  { name: 'about', heading: 'About' },
  { name: 'services', heading: 'Services' },
  { name: 'projects', heading: 'Projects' },
  { name: 'contact-me', heading: 'Contact Me' },
];

const themeGradient = {
  bgGradient: 'linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)',
  bgClip: 'text',
  whiteSpace: 'nowrap',
};

export default function Header() {
  const headerRef = useRef(null);
  const [wDevice] = useMediaQuery('(min-width: 990px)');
  const [hDevice] = useMediaQuery('(min-height: 600px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navHeight = wDevice ? 180 : 140;
  const navView = useRef(true);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos && navView.current) {
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
  }, [navView]);

  const handleClick = anchor => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition;

      if (anchor !== 'home') {
        navView.current = false;
      } else {
        offsetPosition -= navHeight; // Adjust this value to the height of your fixed navigation bar
      }

      setTimeout(() => {
        navView.current = true;
      }, 1000);

      window.scrollTo({
        top: window.scrollY + offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Flex id="home-section" minW={350} alignContent={'space-between'}>
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        // translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        bgImg={navBack}
        bgPos={'center'}
        bgSize={'cover'}
        bgColor={'white'}
        shadow={'inset 0 0 0 118px rgba(0,0,0,0.87)'}
        h={navHeight}
        ref={headerRef}
        zIndex={100}
        pl={1}
        pr={1}
        pt={[5, 1]}

        // justifyContent={"center"}
      >
        <Flex color="white" w={'100%'}>
          <VStack w={'100%'} justifyContent={'space-between'}>
            <HStack justifyContent={'space-between'} w={'100%'}>
              {/* ##### Main Logo Start #### */}
              <Flex maxW={'280'} maxH={navHeight - 5}>
                <VStack justify={'center'}>
                  <Image src={logo} alt="logo" />
                  <Text mt={-2} fontSize={['13px', '3vw', '21px']}>
                    Your Trusted Subcontractor
                  </Text>
                </VStack>
              </Flex>
              <Spacer />
              {/* ##### Main Logo End #### */}

              {/* #### Contacts Icons Start #### */}
              <VStack justifyContent={'space-between'}>
                <Spacer />
                <VStack className="icon_cont" alignItems="flex-start">
                  <Link
                    href={contacts.email.url}
                    _hover={{
                      transform: 'scale(1.02)',
                    }}
                  >
                    <HStack>
                      <Icon
                        as={contacts.email.icon}
                        className="icon"
                        boxSize={6}
                      />
                      <Text
                        minW={'180px'}
                        fontSize={[11, 15, 23]}
                        {...themeGradient}
                      >
                        {contacts.email.name}
                      </Text>
                    </HStack>
                  </Link>
                  <HStack>
                    <Icon as={FaMobile} boxSize={6} />
                    <Text
                      minW={'120px'}
                      {...themeGradient}
                      fontSize={[16, 18, 23]}
                    >
                      {contacts.mobile.name}
                    </Text>
                  </HStack>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Icon as={FaMapLocationDot} boxSize={6} />
                    <Text
                      {...themeGradient}
                      minW={'80px'}
                      fontSize={[16, 18, 23]}
                    >
                      {contacts.loc.name}
                    </Text>
                    <Spacer />
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
                      <Icon
                        as={Image}
                        src={bars}
                        alt="email"
                        boxSize={10}
                      ></Icon>
                    </Flex>
                  </HStack>
                </VStack>
                {/* #### Contacts Icons End #### */}

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
                        href={`/S_B_A/#${navName.name}`}
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
            </HStack>
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
        <DrawerContent bg="gray.700">
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <Avatar name="Sam Salimi" src={sam} boxSize={hDevice ? 24 : 14} />
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
            <Flex
              direction={'column'}
              fontSize={hDevice ? 25 : 15}
              color="white"
              fontWeight="bold"
            >
              {navBars.map(navName => (
                <Link
                  href={`/S_B_A/#${navName.name}`}
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

          <DrawerFooter display={hDevice ? 'flex' : 'none'}>
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
