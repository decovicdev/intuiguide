import styled, { StyledComponent } from "@emotion/native";

interface TransformProps {
  translateX?: number;
  translateY?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
  skewX?: number;
  skewY?: number;
  perspective?: number;
}

const withTransform = <T extends object>(
  Component: StyledComponent<T, any>
): StyledComponent<T & TransformProps> => {
  return styled(Component)<TransformProps>((props) => {
    const {
      translateX,
      translateY,
      scale,
      scaleX,
      scaleY,
      rotate,
      rotateX,
      rotateY,
      skewX,
      skewY,
      perspective,
    } = props;

    const transform = [
      translateX && { translateX },
      translateY && { translateY },
      scale && { scale },
      scaleX && { scaleX },
      scaleY && { scaleY },
      rotate && { rotate },
      rotateX && { rotateX },
      rotateY && { rotateY },
      skewX && { skewX },
      skewY && { skewY },
      perspective && { perspective },
    ].filter(Boolean);

    return {
      transform,
    };
  });
};

export default withTransform;
