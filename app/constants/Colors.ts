import Color from 'color';

export const PRIMARY_TINT_COLOR = '#00BDBB';
export const SECONDARY_TINT_COLOR = '#539DEE';
export const TERTIARY_TINT_COLOR = '#24325C';

export default {
  brand: {
    primary: {
      100: Color(PRIMARY_TINT_COLOR).lighten(0.1).string(),
      200: Color(PRIMARY_TINT_COLOR).lighten(0.2).string(),
      300: PRIMARY_TINT_COLOR,
      400: Color(PRIMARY_TINT_COLOR).darken(0.2).string(),
      500: Color(PRIMARY_TINT_COLOR).darken(0.3).string(),
    },
    secondary: {
      100: Color(SECONDARY_TINT_COLOR).lighten(0.1).string(),
      200: Color(SECONDARY_TINT_COLOR).lighten(0.2).string(),
      300: SECONDARY_TINT_COLOR,
      400: Color(SECONDARY_TINT_COLOR).darken(0.2).string(),
      500: Color(SECONDARY_TINT_COLOR).darken(0.3).string(),
    },

    tertiary: {
      100: Color(TERTIARY_TINT_COLOR).lighten(0.1).string(),
      200: Color(TERTIARY_TINT_COLOR).lighten(0.2).string(),
      300: TERTIARY_TINT_COLOR,
      400: Color(TERTIARY_TINT_COLOR).darken(0.2).string(),
      500: Color(TERTIARY_TINT_COLOR).darken(0.3).string(),
    },
  },
  neutral: {
    100: '#ffffff',
    200: '#fafafa',
    300: '#f5f5f5',
    400: '#d9d9d9',
    500: '#8c8c8c',
    600: '#595959',
    700: '#434343',
    800: '#262626',
    900: '#000000',
  },
  functional: {
    warning: {
      100: '#ffb74d',
      200: '#ffa726',
      300: '#ff9800',
    },
    error: {
      100: '#f44336',
      200: '#e53935',
      300: '#d32f2f',
    },
    success: {
      100: '#4caf50',
      200: '#43a047',
      300: '#388e3c',
    },
    info: {
      100: '#00bcd4',
      200: '#00acc1',
      300: '#0097a7',
    },
  },
};

const darkTintColor = Color(PRIMARY_TINT_COLOR).darken(0.2).hex();

// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: PRIMARY_TINT_COLOR,
//     tabIconDefault: '#ccc',
//     tabIconSelected: PRIMARY_TINT_COLOR,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: darkTintColor,
//     tabIconDefault: '#ccc',
//     tabIconSelected: darkTintColor,
//   },
// };
