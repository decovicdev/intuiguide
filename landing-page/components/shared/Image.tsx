import { ImageProps, Image as ChakraImage } from "@chakra-ui/image";

import fixSrcWithBasePath from "../../utils/fixSrcWithBasePath";

const Image: React.FC<ImageProps> = (props) => {
  let { w, h, loading = "lazy", src, ...rest } = props;

  src = fixSrcWithBasePath(src);

  if (typeof w === "number") {
    w = `${w}px`;
  }
  if (typeof h === "number") {
    h = `${h}px`;
  }

  return <ChakraImage loading={loading} src={src} {...rest} w={w} h={h} />;
};
export default Image;
