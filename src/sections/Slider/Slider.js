import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  useMediaQuery,
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
  arrows: false,
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
    title: 'Project 1',
    text: 'SFS Frame Systems',
    image: slide1,
  },
  {
    title: 'Project 2',
    text: 'Aluminium Decking',
    image: slide2,
  },
  {
    title: 'Project 3',
    text: 'SFS Frame Systems',
    image: slide3,
  },
  {
    title: 'Project 4',
    text: 'Building render in London',
    image: slide4,
  },
  {
    title: 'Project 5',
    text: 'EWI & Render Systems',
    image: slide5,
  },
  {
    title: 'Project 6',
    text: 'Painting and Decorating',
    image: slide6,
  },
];

export default function HomeSlider() {
  const [wDevice] = useMediaQuery('(min-width: 990px)');
  const sliderHeight = wDevice ? 600 : 300;
  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      width={'100%'}
      pt={wDevice ? 160 : 145}
    >
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            h={sliderHeight}
            pos={'relative'}
            key={`${index}a`}
            bgPos="center"
            bgRepeat="no-repeat"
            bgImage={card.image}
            bgSize={'contain'}
          >
            <Box
              h={sliderHeight}
              filter={'blur(9px) brightness(30%)'}
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
            <Container p={4} position="absolute" justifyContent={'left'}>
              <Stack spacing={1}>
                <Heading
                  fontSize={[20, 25, 35]}
                  fontStyle={'italic'}
                  color={'#d19446'}
                  textShadow={'2px 2px 3px black'}
                >
                  {card.title}
                </Heading>
                <Text
                  bgColor={'whiteAlpha.700'}
                  fontSize={[15, 20, 25]}
                  color="black"
                  fontFamily={'monaco,Consolas,Lucida Console,monospace'}
                  textShadow={'0 0 3px #d19446'}
                  borderRadius={20}
                  p={1}
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
