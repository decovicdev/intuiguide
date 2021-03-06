import { FlexStyle } from "react-native";
import styled, { StyledComponent } from "@emotion/native";

interface PositionProps {
  pos?: FlexStyle["position"];
  left?: FlexStyle["left"];
  right?: FlexStyle["right"];
  top?: FlexStyle["top"];
  bottom?: FlexStyle["bottom"];
  overflow?: FlexStyle["overflow"];
  zIndex?: FlexStyle["zIndex"];
}

const withPosition = <T extends object>(
  Component: StyledComponent<T, any, any>
): StyledComponent<T & PositionProps> => {
  return styled(Component)(
    ({ bottom, left, pos, right, top, overflow, zIndex }: PositionProps) => {
      return {
        position: pos,
        left,
        right,
        top,
        bottom,
        overflow,
        zIndex,
      };
    }
  );
};

export default withPosition;
