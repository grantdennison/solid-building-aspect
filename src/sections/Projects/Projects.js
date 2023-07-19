import React, { useState } from 'react';
import { Flex } from '@chakra-ui/layout';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useMediaQuery,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import { projHead, projects } from './projectData.js';

import projectBg from '../../images/projects/projectBg1.jpg';
import ProjectModal from './ProjectModal.js';

export default function Projects() {
  const [wDevice] = useMediaQuery('(min-width: 400px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Step 2: Create a new state variable to store the index of the selected project for the modal
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // Step 3: Define a function to handle the "See More" button click
  const handleSeeMoreClick = index => {
    setSelectedProjectIndex(index);
    onOpen(); // Open the modal
  };

  return (
    <Flex
      color={'white'}
      bgImage={projectBg}
      bgRepeat={'repeat'}
      bgSize={'50%'}
      // shadow={'inset 0 0 0 2000px rgba(0,0,0,0.5)'}
      id="projects-section"
      justifyContent={'center'}
      p={12}
    >
      <VStack>
        <Heading pb={8} fontSize={{ base: '40px', md: '50px' }}>
          {projHead}
        </Heading>
        <SimpleGrid spacing={8} minChildWidth={wDevice ? 400 : 280}>
          {projects.map((service, index) => (
            <Card
              bgColor={'whiteAlpha.900'}
              borderRadius={40}
              shadow={'0 0 2px 2px'}
              border={'2px solid black'}
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
                  shadow={'0 0 4px 3px '}
                ></Image>
              </CardBody>
              <CardFooter>
                <Text color={'black'} fontSize={20}>
                  {service.text}
                </Text>
                <Button onClick={() => handleSeeMoreClick(index)} mt={4}>
                  See More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedProjectIndex !== null && (
        <ProjectModal
          isOpen={isOpen}
          onClose={() => setSelectedProjectIndex(null)}
          project={projects[selectedProjectIndex]}
        />
      )}
    </Flex>
  );
}
