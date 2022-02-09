import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';

const Link: React.FC<LinkProps> = (props) => {
  const { href, ...rest } = props;

  return (
    <NextLink href={fixSrcWithBasePath(href)} passHref>
      <ChakraLink fontWeight={600} {...rest} />
    </NextLink>
  );
};

export default Link;
