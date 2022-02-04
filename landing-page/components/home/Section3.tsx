import { Box, Divider, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import FadeIn from '../shared/FadeIn';

import Image from '../shared/Image';
import { Body2 } from '../shared/typography';

const places = [
  { name: 'Paris', image: '/images/paris.png', map: '/images/paris-map.png' },
  {
    name: 'Gorges du Verdon',
    image: '/images/gorges-du-verdon.png',
    map: '/images/paris-map.png',
  },
  {
    name: 'Dune du Pilate',
    image: '/images/dune-du-pilate.png',
    map: '/images/paris-map.png',
  },
  {
    name: 'Parc de Beauval',
    image: '/images/parc-de-beauval.png',
    map: '/images/paris-map.png',
  },
];

interface Section3Props {}

const Section3: React.FC<Section3Props> = (props) => {
  return (
    <Wrap
      spacing={['4', '4', '4', '0']}
      alignItems='center'
      justify='center'
      mt='-150px'
    >
      {places.map((place, index) => {
        const isOdd = index % 2 === 0;
        const transform = `${
          isOdd ? 'translateY(0%)' : 'translateY(-5%)'
        } translateX(-${index * 10}%) `;

        return (
          <WrapItem key={place.name}>
            <FadeIn delay={index * 0.5} duration={1}>
              <Box
                py='4'
                transform={['', '', '', transform]}
                bgImage={`url('${fixSrcWithBasePath(place.image)}')`}
                bgSize='cover'
                bgRepeat='no-repeat'
                boxSize='320px'
                borderRadius='3xl'
              >
                <HStack px='4'>
                  <Image src={place.map} alt={place.name} />
                  <Body2 color='white'>{place.name}</Body2>
                </HStack>
                <Divider borderBottomWidth='4px' borderColor='white' />
              </Box>
            </FadeIn>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
export default Section3;
