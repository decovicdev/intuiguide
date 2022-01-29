import { ImageProps, Image as ChakraImage } from '@chakra-ui/react';

const Image: React.FC<ImageProps> = (props) => {
  let { w, h, ...rest } = props;
  if (typeof w === 'number') {
    w = `${w}px`;
  }
  if (typeof h === 'number') {
    h = `${h}px`;
  }

  return <ChakraImage {...rest} w={w} h={h} />;
};
export default Image;
