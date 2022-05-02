import { Input as _Input, InputProps } from "@chakra-ui/input";

const Input: React.FC<InputProps> = (props) => {
  return (
    <_Input
      w="full"
      variant="filled"
      size="lg"
      borderRadius="full"
      {...props}
    />
  );
};
export default Input;
