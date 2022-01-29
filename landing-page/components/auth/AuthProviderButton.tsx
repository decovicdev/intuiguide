import { ButtonProps } from '@chakra-ui/react';

import Button from '../shared/button/Button';

const AuthProviderButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      variant='outline'
      w='full'
      size='lg'
      borderRadius='full'
      justifyContent='space-around'
      {...props}
    />
  );
};
export default AuthProviderButton;
