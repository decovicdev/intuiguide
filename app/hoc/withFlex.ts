import { FlexStyle } from "react-native";
import styled, { StyledComponent } from "@emotion/native";

interface FlexProps {
  flex?: FlexStyle["flex"];
  direction?: FlexStyle["flexDirection"];
  align?: FlexStyle["alignItems"];
  alignS?: FlexStyle["alignSelf"];
  justify?: FlexStyle["justifyContent"];
  wrap?: FlexStyle["flexWrap"];
  place?: "center" | "flex-end" | "flex-start";
  basis?: FlexStyle["flexBasis"];
  flexGrow?: FlexStyle["flexGrow"];
  flexShrink?: FlexStyle["flexShrink"];
}

const withFlex = <T extends object>(
  Component: StyledComponent<T, any, any>
): StyledComponent<T & FlexProps> => {
  return styled(Component)((props: FlexProps) => {
    const {
      direction,
      align,
      alignS,
      justify,
      wrap,
      place,
      basis,
      flex,
      flexGrow,
      flexShrink,
    } = props;

    const flexDirection = direction;
    const flexWrap = wrap;
    const alignItems = place || align;
    const justifyContent = place || justify;
    const alignSelf = alignS;
    const flexBasis = basis;

    return {
      flex,
      flexBasis,
      flexDirection,
      alignSelf,
      flexWrap,
      alignItems,
      justifyContent,
      flexGrow,
      flexShrink,
    };
  });
};

export default withFlex;
