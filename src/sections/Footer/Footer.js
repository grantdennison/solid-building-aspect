import React from 'react';
import { Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import logo from '../../images/logo1.png';

export default function Footer() {
  return (
    <Flex bg="black" h={150} color={'white'} justifyContent={'center'}>
      <Image
        src={logo}
        alt="logo"
        p={5}
        display={['none', 'none', 'flex']}
      ></Image>
      <Spacer></Spacer>
      <VStack
        justifyContent={'center'}
        fontSize={[15, 20, 20, 35]}
        bgGradient={'linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)'}
        bgClip={'text'}
      >
        <Text as={'b'}>Email: sam@solidbuildingaspect.co.uk</Text>
        <Text as={'b'}>Phone: 077 3755 1182</Text>
      </VStack>
      <Spacer></Spacer>
      <Image
        src={logo}
        alt="logo"
        p={5}
        display={['none', 'none', 'none', 'none', 'flex']}
      ></Image>
    </Flex>
  );
}
