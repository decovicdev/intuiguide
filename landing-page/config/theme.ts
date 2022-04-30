import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#00BB6A",
  secondary: "#00BDBB",
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

export default theme;
