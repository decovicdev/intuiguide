import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';

const Link: React.FC<LinkProps> = (props) => {
  let { href, ...rest } = props;

  href = fixSrcWithBasePath(href);

  return (
    <NextLink
      href={{
        pathname: href,
      }}
      passHref
    >
      <ChakraLink fontWeight={600} {...rest} />
    </NextLink>
  );
};

export default Link;
