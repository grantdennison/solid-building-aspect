import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider/Slider.css';

import slide1 from '../../images/slider/image1.jpg';
import slide2 from '../../images/slider/image2.jpg';
import slide3 from '../../images/slider/image3.jpg';
import slide4 from '../../images/slider/image4.jpg';
import slide5 from '../../images/slider/image5.jpg';
import slide6 from '../../images/slider/image6.jpg';

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 4000,
  fade: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => (
    <div>
      <Box> {dots} </Box>
    </div>
  ),
};

const cards = [
  {
    title: 'Design Projects 1',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide1,
  },
  {
    title: 'Design Projects 2',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide2,
  },
  {
    title: 'Design Projects 3',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide3,
  },
  {
    title: 'Design Projects 4',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide4,
  },
  {
    title: 'Design Projects 5',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide5,
  },
  {
    title: 'Design Projects 6',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: slide6,
  },
];

export default function HomeSlider() {
  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      width={'100%'}
      height={'565px'}
      pt={170}
    >
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            h={400}
            pos={'relative'}
            key={`${index}a`}
            bgPos="center"
            bgRepeat="no-repeat"
            bgImage={card.image}
            bgSize={'contain'}
          >
            <Box
              h={400}
              filter={'blur(9px) brightness(50%)'}
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              key={`${index}a`}
              bgPos="center"
              bgRepeat="repeat"
              bgImage={card.image}
              bgSize={'contain'}
              zIndex={-1}
            />
            <Container
              size="container.lg"
              height="90%"
              position="relative"
              display="flex"
              alignItems="end"
              zIndex={2}
            >
              <Stack spacing={1}>
                <Heading
                  fontSize={'2xl'}
                  fontStyle={'italic'}
                  color={'#d19446'}
                  textShadow={'2px 2px 3px black'}
                >
                  {card.title}
                </Heading>
                <Text
                  bgColor={'whiteAlpha.600'}
                  fontSize={'md'}
                  color="black"
                  textShadow={'0 0 3px #d19446'}
                  borderRadius={20}
                  p={2}
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
