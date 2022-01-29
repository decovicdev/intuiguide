import { Box } from '@chakra-ui/react';

import Section1 from '../components/about/Section1';
import Section2 from '../components/about/Section2';
import Section5 from '../components/home/Section5';

interface aboutProps {}

const about: React.FC<aboutProps> = (props) => {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section5 />
    </Box>
  );
};
export default about;
