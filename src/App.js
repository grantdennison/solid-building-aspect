import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './sections/Header/Header';
import Slider from './sections/Slider/Slider';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <Header />
        <Slider />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
