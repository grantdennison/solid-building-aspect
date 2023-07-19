import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider/Slider.css';
import images from './sliderData.js';
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  fade: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => (
    <div>
      <Box> {dots} </Box>
    </div>
  ),
};

const cards = images.map((image, index) => ({
  image: image,
  key: `slide-${index}`,
}));

export default function HomeSlider() {
  const [wDevice] = useMediaQuery('(min-width: 990px)');
  const sliderHeight = wDevice ? 600 : 300;
  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      width={'100%'}
      pt={wDevice ? 180 : 140}
    >
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            h={sliderHeight}
            pos={'relative'}
            key={card.key}
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
              bgPos="center"
              bgRepeat="repeat"
              bgImage={card.image}
              bgSize={'contain'}
              zIndex={-1}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
