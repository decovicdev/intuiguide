import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import AppDownloadLinks from './AppDownloadLinks';
import Container from './Container';
import Image from './Image';
import ImageClipPath from './ImageClipPath';
import Stack from './Stack';
import { Body1, LargeHeading } from './typography';

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <Box
      minH={1000}
      background="linear-gradient(to bottom right, rgba(255,255,255,.9),rgba(255,255,255,.1)), url('/images/auth-bg.png')"
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      clipPath='url(#clipPath)'
    >
      <ImageClipPath />
      <Container pt={['20', '200px']}>
        <Stack justify='space-evenly'>
          <VStack
            align={['center', 'center', 'center', 'flex-start']}
            spacing='8'
            maxW='600px'
          >
            <LargeHeading>There’s a smarter way to drive.</LargeHeading>
            <Body1>
              Take car travel to the next level with intuitive route planning
              from Intuiguide today.
            </Body1>
            <AppDownloadLinks />
          </VStack>
          <Image src='/images/map-screen.png' alt='hero' />
        </Stack>
      </Container>
    </Box>
  );
};
export default Hero;
