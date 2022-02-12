import React from "react";
import { StyleSheet } from "react-native";

import Button from "./Button";

const ButtonWithElevation: React.FC<React.ComponentProps<typeof Button>> = ({
  style,
  ...props
}) => {
  return <Button {...props} style={[defaultStyle.elavation, style]} />;
};

const defaultStyle = StyleSheet.create({
  elavation: {
    elevation: 10,
    zIndex: 10,
    shadowColor: "grey",
    shadowRadius: 10,
  },
});

export default ButtonWithElevation;
