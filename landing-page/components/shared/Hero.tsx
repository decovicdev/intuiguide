import { Box, VStack } from "@chakra-ui/react";

import fixSrcWithBasePath from "../../utils/fixSrcWithBasePath";
import AppDownloadLinks from "./AppDownloadLinks";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "./Image";
import { HeroBgClipPath } from "./ImageClipPath";
import Stack from "./Stack";
import { Body1, LargeHeading } from "./typography";

const bg = `linear-gradient(to bottom right, rgba(255,255,255,.9),rgba(255,255,255,.1)), url('${fixSrcWithBasePath(
  "/images/bg.png"
)}')`;

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <Box
      minH={1000}
      background={bg}
      clipPath="url(#clipPath)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box pos="absolute">
        <HeroBgClipPath />
      </Box>
      <Container pt={["20", "200px"]}>
        <Stack justify="space-evenly">
          <FadeIn>
            <VStack
              align={["center", "center", "center", "flex-start"]}
              spacing="8"
              maxW="600px"
            >
              <LargeHeading>There’s a smarter way to drive.</LargeHeading>
              <Body1>
                Take car travel to the next level with intuitive route planning
                from Intuiguide today.
              </Body1>
              <AppDownloadLinks />
            </VStack>
          </FadeIn>
          <Image src="/images/map-screen.png" alt="hero" loading="eager" />
        </Stack>
      </Container>
    </Box>
  );
};
export default Hero;
