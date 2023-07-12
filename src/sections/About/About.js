import React from 'react';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import bgImage from '../../images/about/buildings.jpg';

const aboutHead = `About Solid Building Aspect Ltd:`;
const aboutBody = (
  <div>
    Solid Building Aspect Ltd is a premier construction company specializing in
    Dry Lining, SFS Frame Systems, Aluminium Decking, and EWI & Render Systems.
    Our team of experienced professionals is dedicated to transforming spaces
    with craftsmanship and innovation.
    <br />
    <br />
    We excel in Dry Lining, a versatile method that ensures a seamless finish.
    Our expertise in SFS Frame Systems creates robust structures, while our
    Aluminium Decking combines aesthetics and functionality. We also offer
    energy-efficient EWI & Render Systems to enhance thermal performance.
    <br />
    <br />
    At Solid Building Aspect Ltd, we turn visions into reality. By closely
    collaborating with clients, we exceed expectations and deliver exceptional
    results. Choose us for your next construction project and experience our
    commitment to excellence.
  </div>
);

export default function About() {
  return (
    <Flex id="about-section" justifyContent="center">
      <Flex
        position="relative"
        bgImg={bgImage}
        bgPos={'center'}
        bgSize={'100% 100%'}
        shadow={'inset 0 0 0 2000px rgba(0,0,0,0.8)'}
        w={'100%'}
        pt={40}
        pb={40}
        color={'white'}
        justifyContent="center"
      >
        <VStack p={8} maxW={1200} align="center">
          <Heading alignSelf={'flex-start'} mb={3}>
            {aboutHead}
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '25px', lg: '36px' }}
            fontFamily={'Verdana (sans-serif)'}
          >
            {aboutBody}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
