import { Box } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import { AuthBgClipPath } from '../shared/ImageClipPath';

const LeftSide: React.FC = (props) => {
  return (
    <Box
      bg={`url(${fixSrcWithBasePath('/images/bg.png')}) no-repeat `}
      bgColor='white'
      h={{
        base: '250px',
        xl: '130vh',
      }}
      clipPath={['', '', '', 'url(#authBgClipPath)']}
      bgBlendMode='multiply'
      w={['100%', '100%', '100%', '50%']}
      bgSize='cover'
      bgPos='center'
    >
      <Box pos='absolute'>
        <AuthBgClipPath />
      </Box>
    </Box>
  );
};

export default LeftSide;
