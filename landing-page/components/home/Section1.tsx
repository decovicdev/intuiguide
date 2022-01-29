import { VStack } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import Container from '../shared/Container';
import FadeIn from '../shared/FadeIn';
import Image from '../shared/Image';
import Stack from '../shared/Stack';
import { Body1, Heading } from '../shared/typography';

interface Section1Props {}

const Section1: React.FC<Section1Props> = (props) => {
  return (
    <Container my='12'>
      <FadeIn>
        <Stack spacing='12' alignItems='center' justify='center'>
          <Image src={fixSrcWithBasePath('/images/map.png')} alt='Map' />
          <VStack maxW='470px'>
            <Heading>Start your journey and we’ll do the rest…</Heading>
            <Body1 color='gray.400'>
              Select your key destinations and waypoints, then watch as the app
              creates custom routes just for you!
            </Body1>
          </VStack>
        </Stack>
      </FadeIn>
    </Container>
  );
};
export default Section1;
