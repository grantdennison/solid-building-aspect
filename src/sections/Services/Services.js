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
  Link,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';

import deck from '../../images/slider/image4.jpg';
import paint from '../../images/slider/image6.jpg';
import cladding from '../../images/slider/cladding.jpg';
import frame from '../../images/slider/image3.jpg';
import plaster from '../../images/about/plaster.jpg';
import bgBack from '../../images/services/deck.jpg';

const serHead = 'Services provided by Solid Building Aspect Ltd:';
const serFoot =
  'These services showcase our commitment to craftsmanship, innovation, and delivering exceptional results. Choose Solid Building Aspect Ltd for your construction project and experience our expertise in these areas.';

const servises = [
  {
    image: plaster,
    header: 'Dry Lining:',
    text: 'Dry Lining: Our company specializes in Dry Lining, a versatile method that ensures a seamless finish. We have the expertise to transform spaces with precision and attention to detail.',
  },
  {
    image: frame,
    header: 'SFS Frame Systems:',
    text: 'SFS Frame Systems: We excel in SFS Frame Systems, creating robust structures that are durable and reliable. Our team of professionals is skilled in constructing high-quality frame systems for various construction projects.',
  },

  {
    image: deck,
    header: 'Aluminium Decking:',
    text: 'Aluminium Decking: At Solid Building Aspect Ltd, we offer Aluminium Decking solutions that combine aesthetics and functionality. Our decking options are designed to enhance outdoor spaces, providing a durable and visually appealing surface.',
  },

  {
    image: cladding,
    header: 'EWI & Render Systems:',
    text: 'EWI & Render Systems: We provide energy-efficient External Wall Insulation (EWI) and Render Systems to enhance thermal performance. Our systems are designed to improve insulation and protect buildings from external elements.',
  },
  {
    image: paint,
    header: 'Painting and Decorating:',
    text: 'Painting and Decorating: Our skilled painters and decorators are experienced in transforming spaces with a fresh coat of paint and attention to detail. We offer a wide range of colors and finishes to create the desired atmosphere in your building or office. Our team will prepare the surfaces, apply weather-resistant paints, and provide restoration and repair services if needed.',
  },
];

export default function Services() {
  const [wDevice] = useMediaQuery('(min-width: 400px)');
  return (
    <Flex
      color={'white'}
      bgImage={bgBack}
      // bgGradient={
      //   'repeating-linear(to-bl, #4d3b0b 3%, #654f14 5%, #4d3b0b 7%,  #654f14 9%, #100e2d 11%)'
      // }
      shadow={'inset 0 0 0 2000px rgba(0,0,0,0.5)'}
      id="services-section"
      justifyContent={'center'}
      p={12}
    >
      <VStack>
        <Heading pb={20}>{serHead}</Heading>
        <SimpleGrid spacing={8} minChildWidth={wDevice ? 400 : 280}>
          {servises.map((service, index) => (
            <Card bgColor={'blackAlpha.400'} borderRadius={40}>
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
          pt={45}
          pb={30}
          maxW={1200}
          fontSize={{ base: '15px', md: '25px', lg: '26px' }}
        >
          {serFoot}
        </Text>
      </VStack>
    </Flex>
  );
}
