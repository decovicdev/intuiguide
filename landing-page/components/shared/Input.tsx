import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = (props) => {
  return (
    <ChakraInput
      w='full'
      variant='filled'
      size='lg'
      borderRadius='full'
      {...props}
    />
  );
};
export default Input;
