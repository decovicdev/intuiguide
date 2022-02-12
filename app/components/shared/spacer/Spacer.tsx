import React from "react";
import View from "../View";

interface SpacerProps {
  flex?: number;
}

const Spacer: React.FC<SpacerProps> = ({ flex }) => {
  return <View style={{ flex: flex || 1 }} />;
};
export default Spacer;
