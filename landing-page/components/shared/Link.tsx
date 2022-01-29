import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';

const Link: React.FC<LinkProps> = (props) => {
  const { href, ...rest } = props;

  return (
    <ChakraLink fontWeight={600} href={fixSrcWithBasePath(href)} {...rest} />
  );
};

export default Link;
