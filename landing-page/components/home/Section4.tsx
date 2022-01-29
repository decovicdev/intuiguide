import { VStack } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import Container from '../shared/Container';
import Image from '../shared/Image';
import Stack from '../shared/Stack';
import { Body1, Heading } from '../shared/typography';

interface Section4Props {}

const Section4: React.FC<Section4Props> = (props) => {
  return (
    <Container my='16'>
      <Stack justify='center' alignItems='center'>
        <VStack align='flex-start' maxW='470px'>
          <Heading>
            Create a personal pathway to popular travel destinations.
          </Heading>
          <Body1 color='gray.400'>
            Most trip planners value speed above all else. At Intuiguide, we
            know that the journey is sometimes just as important as the
            destination. Experience cities based on your preferences, not on
            your ETA.
          </Body1>
        </VStack>
        <Image src={fixSrcWithBasePath('/images/tourist.png')} alt='Tourist' />
      </Stack>
    </Container>
  );
};
export default Section4;
