import { Box } from "@chakra-ui/layout";

import fixSrcWithBasePath from "../../utils/fixSrcWithBasePath";
import { AuthBgClipPath } from "../shared/ImageClipPath";

const LeftSide: React.FC = (props) => {
  return (
    <Box
      alignSelf="stretch"
      bg={`url(${fixSrcWithBasePath("/images/bg.png")}) no-repeat `}
      clipPath={["", "", "", "url(#authBgClipPath)"]}
      h={{
        base: "250px",
        lg: "130vh",
      }}
      bgBlendMode="multiply"
      w={["100%", "100%", "100%", "50%"]}
      bgSize="cover"
      bgPos="center"
    >
      <AuthBgClipPath />
    </Box>
  );
};

export default LeftSide;
