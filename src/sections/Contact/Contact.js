import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Flex,
  Heading,
} from '@chakra-ui/react';
import bgImage from '../../images/contact/contact.jpg';

export default function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    // Perform form submission logic here
    // You can validate the fields and send the data to a server

    // Example validation for email field
    if (!email.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Example success toast
    toast({
      title: 'Form Submitted',
      description: 'Thank you for your message!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Reset form fields
    setName('');
    setEmail('');
    setArea('');
    setMessage('');
  };

  return (
    <Flex
      color="white"
      id="contact-me-section"
      justifyContent="center"
      bgImg={bgImage}
      bgPos="center"
      bgSize="cover"
      shadow="inset 0 0 0 2000px rgba(0,0,0,0.8)"
      pt={20}
      pb={40}
      px={5}
    >
      <Flex flexDir="column" maxW={500} w="100%">
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="start">
            <Heading>Contact Form:</Heading>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Business Name</FormLabel>
              <Input
                type="text"
                value={business}
                onChange={e => setBusiness(e.target.value)}
                // required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Area</FormLabel>
              <Input
                type="text"
                value={area}
                onChange={e => setArea(e.target.value)}
                // required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                minH={200}
              />
            </FormControl>
            <Button w={150} type="submit" colorScheme="blue" variant="solid">
              Submit
            </Button>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
}
