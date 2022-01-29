import {
  Box,
  Circle,
  Divider,
  HStack,
  StackDivider,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Container from '../shared/Container';
import Image from '../shared/Image';
import Stack from '../shared/Stack';
import { Body1, Body2, Heading, Title } from '../shared/typography';

const points = [
  {
    title: 'Set your parameters',
    description:
      'Select from pre-trip photos so the app can work its trip planning magic.',
    icon: '/images/folder.png',
  },
  {
    title: 'Provide insights',
    description:
      'This intuitive app gets smarter the more you interact with it.',
    icon: '/images/sun.png',
  },
  {
    title: 'Enjoy the journey',
    description:
      'Celebrate the freedom of the road with custom routes just for you.',
    icon: '/images/rocket.png',
  },
];

interface Section2Props {}

const Section2: React.FC<Section2Props> = (props) => {
  return (
    <Box
      minH={980}
      bgImage="url('/images/background.png')"
      bgRepeat='no-repeat'
      bgSize='cover'
      pt='180px'
    >
      <Container>
        <Wrap justify='space-between'>
          {points.map((point) => {
            return (
              <WrapItem key={point.title}>
                <VStack spacing='8' p='4' maxW='360px'>
                  <Circle size='100px' bg='secondary'>
                    <Image src={point.icon} alt={point.title} />
                  </Circle>
                  <Title textAlign='center'>{point.title}</Title>
                  <Body1 textAlign='center' color='gray.400'>
                    {point.description}
                  </Body1>
                </VStack>
              </WrapItem>
            );
          })}
        </Wrap>
        <VStack mt='20' spacing='8' pb='180px'>
          <Heading>Easy exploration, right at your fingertips.</Heading>
          <Body1 color='gray.400' maxW='770px' textAlign='center'>
            Trip planning is easier with Intuiguide. Navigate new cities, towns,
            and tourist hotspots in your own unique way.
          </Body1>
        </VStack>
      </Container>
    </Box>
  );
};
export default Section2;
