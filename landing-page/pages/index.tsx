import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Hero from '../components/shared/Hero';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Box>
  );
};

export default Home;
