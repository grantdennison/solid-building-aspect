import React from 'react';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { aboutBody, aboutHead } from './aboutData';
import bgImage from '../../images/about/buildings.jpg';

export default function About() {
  return (
    <Flex id="about-section" justifyContent="center">
      <Flex
        position="relative"
        bgImg={bgImage}
        bgPos={'center'}
        bgSize={'100% 100%'}
        shadow={'inset 0 0 0 2000px rgba(0,0,0,0.85)'}
        w={'100%'}
        pb={5}
        color={'white'}
        justifyContent="center"
      >
        <VStack p={8} maxW={1200} align="center">
          <Heading pb={8} fontSize={{ base: '40px', md: '50px' }}>
            {aboutHead}
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '25px', lg: '36px' }}
            fontFamily={'Verdana (sans-serif)'}
            whiteSpace={'pre-line'}
          >
            {aboutBody}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
