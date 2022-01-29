import { chakra } from '@chakra-ui/react';

import Button from './Button';

const PrimaryButton = chakra(Button, {
  baseStyle: {
    backgroundColor: 'secondary',
    color: 'white',
    borderRadius: 'full',
    px: 10,
    py: 6,
    fontWeight: 'regular',
  },
});

export default PrimaryButton;
