import { VStack } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import Container from '../shared/Container';
import FadeIn from '../shared/FadeIn';
import Image from '../shared/Image';
import { LargeHeading, Title } from '../shared/typography';

interface Section1Props {}

const Section1: React.FC<Section1Props> = (props) => {
  return (
    <Container pt={['80px', '80px', '80px', '180px']}>
      <FadeIn>
        <VStack spacing='16'>
          <LargeHeading maxW='600px' textAlign='center'>
            Passion Combined With Experience
          </LargeHeading>
          <Title maxW='820px' textAlign='center' fontWeight='400' color='gray'>
            Intuiguide is an intuitive car travel route planning app that
            combines pre-selected waypoints and user preferences and insights to
            create unique journeys.
          </Title>
          <Image
            borderRadius='2xl'
            src='/images/wilderness.jpeg'
            alt='wilderness'
            loading='eager'
          />
        </VStack>
      </FadeIn>
    </Container>
  );
};
export default Section1;
