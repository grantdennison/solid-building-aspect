import React from 'react';
import { Flex, Image, Spacer, Text, Icon, HStack } from '@chakra-ui/react';
import { FaMobile, FaEnvelope } from 'react-icons/fa6';

import logo from '../../images/logo1.png';

const themeGradient = {
  bgGradient: 'linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)',
  bgClip: 'text',
  fontSize: [13, 20, 20, 35],
  whiteSpace: 'nowrap',
};
export default function Footer() {
  return (
    <Flex
      bg="black"
      h={100}
      color={'white'}
      justifyContent={'space-between'}
      align={'center'}
    >
      <HStack w={'100%'}>
        <Image
          src={logo}
          alt="logo"
          p={5}
          h={100}
          display={['none', 'none', 'flex']}
        ></Image>
        <Spacer />
        <Icon as={FaEnvelope} className="icon" boxSize={[4, 6]} />
        <Text minW={'205px'} {...themeGradient}>
          sam@solidbuildingaspect.co.uk
        </Text>
        <Text>|</Text>
        <Icon as={FaMobile} className="icon" boxSize={[4, 6]} />
        <Text minW={'90px'} {...themeGradient}>
          07737551182
        </Text>
        <Spacer />
        <Image
          src={logo}
          alt="logo"
          h={100}
          p={5}
          display={['none', 'none', 'none', 'none', 'flex']}
        ></Image>
      </HStack>
    </Flex>
  );
}
