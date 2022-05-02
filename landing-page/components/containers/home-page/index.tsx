import { Box } from "@chakra-ui/react";

import Section1 from "../home-page/Section1";
import Section2 from "../home-page/Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Hero from "../../shared/Hero";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <Box>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Box>
  );
};
export default HomePage;
