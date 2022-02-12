import React, { useMemo } from 'react';
import styled, { StyledComponent } from '@emotion/native';
import Color from 'color';

import { useThemeColors } from '../hooks/useThemeColor';

interface BgProps {
  bg?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'background'
    | 'card'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | string;
  opacity?: number;
  alpha?: number;
  darken?: number;
  lighten?: number;
}

const withBg = <T extends object>(Component: StyledComponent<T, any>) => {
  const NewComponent: React.FC<T & BgProps> = (props) => {
    const { bg, opacity, alpha, darken, lighten, style, ...rest }: any = props;
    const {
      background,
      card,
      warning,
      success,
      error,
      info,
      tint: { primary, secondary, tertiary },
    } = useThemeColors();

    const bgColor = useMemo(() => {
      switch (bg) {
        case 'primary':
          return primary;
        case 'secondary':
          return secondary;
        case 'tertiary':
          return tertiary;
        case 'background':
          return background;
        case 'card':
          return card;
        case 'error':
          return error;
        case 'success':
          return success;
        case 'warning':
          return warning;
        case 'info':
          return info;
        default:
          return bg;
      }
    }, [bg]);

    const bgStyle = useMemo(() => {
      let backgroundColor = bgColor;

      if (alpha) {
        backgroundColor = Color(backgroundColor).alpha(alpha).string();
      }
      if (darken) {
        backgroundColor = Color(backgroundColor).darken(darken).string();
      }
      if (lighten) {
        backgroundColor = Color(backgroundColor).lighten(lighten).string();
      }
      return {
        backgroundColor,
        opacity,
      };
    }, [bgColor, alpha, darken, lighten, opacity]);

    return <Component {...(rest as T & BgProps)} style={[bgStyle, style]} />;
  };
  return styled(NewComponent)();
};

export default withBg;
