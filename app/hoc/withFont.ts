import styled, { StyledComponent } from "@emotion/native";
import { TextStyle } from "react-native";

interface FontProps {
  fontSize?: TextStyle["fontSize"];
  fontWeight?: TextStyle["fontWeight"];
  fontStyle?: TextStyle["fontStyle"];
  fontFamily?: TextStyle["fontFamily"];
  textAlign?: TextStyle["textAlign"];
  textDecorationColor?: TextStyle["textDecorationColor"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
  textShadowColor?: TextStyle["textShadowColor"];
  textTransform?: TextStyle["textTransform"];
  letterSpacing?: TextStyle["letterSpacing"];
  lineHeight?: TextStyle["lineHeight"];
}

const withFont = <T extends object>(
  Component: StyledComponent<T, any>
): StyledComponent<T & FontProps> => {
  return styled(Component)<FontProps>((props) => {
    const {
      fontSize,
      fontWeight,
      fontStyle,
      textAlign,
      textDecorationColor,
      textDecorationLine,
      textDecorationStyle,
      textShadowOffset,
      textShadowRadius,
      textShadowColor,
      textTransform,
      letterSpacing,
      lineHeight,
    } = props;
    let fontFamily;
    switch (fontWeight) {
      case "100":
        fontFamily = "poppins-thin";
        break;
      case "200":
        fontFamily = "poppins-extra-light";
        break;
      case "300":
        fontFamily = "poppins-light";
        break;
      case "400":
        fontFamily = "poppins-regular";
        break;
      case "500":
        fontFamily = "poppins-medium";
        break;
      case "600":
        fontFamily = "poppins-semi-bold";
        break;
      case "bold":
      case "700":
        fontFamily = "poppins-bold";
        break;
      case "800":
        fontFamily = "poppins-extra-bold";
        break;
      case "900":
        fontFamily = "poppins-black";
        break;
      default:
        fontFamily = "poppins-regular";
    }

    return {
      fontFamily,
      fontSize,
      fontStyle,
      textAlign,
      textDecorationColor,
      textDecorationLine,
      textDecorationStyle,
      textShadowOffset,
      textShadowRadius,
      textShadowColor,
      textTransform,
      letterSpacing,
      lineHeight,
    };
  });
};

export default withFont;
