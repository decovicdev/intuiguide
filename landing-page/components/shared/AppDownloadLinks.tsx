import { HStack } from '@chakra-ui/react';

import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import Image from './Image';
import Link from './Link';

interface AppDownloadLinksProps {}

const AppDownloadLinks: React.FC<AppDownloadLinksProps> = (props) => {
  return (
    <HStack spacing='4'>
      <Link>
        <Image
          src={fixSrcWithBasePath('/images/app-store.png')}
          alt='App store'
        />
      </Link>
      <Link>
        <Image
          src={fixSrcWithBasePath('/images/google-play.png')}
          alt='Google play'
        />
      </Link>
    </HStack>
  );
};
export default AppDownloadLinks;
