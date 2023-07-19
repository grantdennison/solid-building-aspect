import React from 'react';
import {
  Flex,
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  Image,
  CardBody,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';

import bgBack from '../../images/services/deck.jpg';
import { servises, serFoot, serHead } from './servicesData.js';

export default function Services() {
  const [wDevice] = useMediaQuery('(min-width: 400px)');
  return (
    <Flex
      color={'white'}
      bgImage={bgBack}
      shadow={'inset 0 0 0 2000px rgba(0,0,0,0.5)'}
      id="services-section"
      justifyContent={'center'}
      p={12}
    >
      <VStack>
        <Heading pb={8} fontSize={{ base: '40px', md: '50px' }}>
          {serHead}
        </Heading>
        <SimpleGrid spacing={8} minChildWidth={wDevice ? 400 : 280}>
          {servises.map((service, index) => (
            <Card
              bgColor={'blackAlpha.500'}
              borderRadius={40}
              shadow={'0 0 2px 2px'}
              // border={'2px solid black'}
            >
              <CardHeader>
                <Heading
                  size="lg"
                  textShadow={'dark-lg'}
                  bgGradient={
                    'linear(to-l, #8c6804 0%, #dcaf77 45%, #8c5e2a 100%)'
                  }
                  bgClip={'text'}
                >
                  {service.header}
                </Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src={service.image}
                  alt={'image'}
                  w={'100%'}
                  maxH={300}
                  shadow={'dark-lg'}
                  borderRadius={10}
                ></Image>
              </CardBody>
              <CardFooter>
                <Text color={'white'} fontSize={20}>
                  {service.text}
                </Text>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <Text
          mt={20}
          p={5}
          maxW={1200}
          fontSize={{ base: '15px', md: '25px', lg: '26px' }}
          bgColor={'whiteAlpha.300'}
          borderRadius={100}
          align={'center'}
        >
          {serFoot}
        </Text>
      </VStack>
    </Flex>
  );
}
