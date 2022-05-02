import { Box } from "@chakra-ui/react";

import Section5 from "../home-page/Section5";
import Section1 from "./Section1";
import Section2 from "./Section2";

interface aboutPageProps {}

const AboutPage: React.FC<aboutPageProps> = (props) => {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section5 />
    </Box>
  );
};
export default AboutPage;
