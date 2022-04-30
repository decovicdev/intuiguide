import styled, { StyledComponent } from "@emotion/native";
import Theme from "../constants/Theme";

interface ShadowProps {
  shadow?: keyof typeof Theme.shadow;
}

const f = styled.View((e) => ({}));

const withShadow = <T extends object>(
  Component: StyledComponent<T, any>
): StyledComponent<T & ShadowProps> => {
  return styled(Component)((props: ShadowProps) => {
    const { shadow } = props;

    const shadowStyle = shadow
      ? {
          shadowColor: "grey",
          shadowOffset: {
            width: Theme.shadow[shadow],
            height: Theme.shadow[shadow],
          },
          shadowOpacity: 1,
          shadowRadius: Theme.shadow[shadow],
          elevation: Theme.shadow[shadow],
        }
      : {};

    return {
      ...shadowStyle,
    };
  });
};

export default withShadow;
