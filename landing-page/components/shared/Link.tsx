import { chakra, Link as ChakraLink } from '@chakra-ui/react';

const Link = chakra(ChakraLink, {
  baseStyle: {
    fontWeight: '600',
  },
});

export default Link;
