import Colors from "./Colors";

const typography = {
  heading: {
    fontSize: 36,
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  body1: {
    fontSize: 18,
  },
  body2: {
    fontSize: 16,
  },
  caption1: {
    fontSize: 14,
  },
  caption2: {
    fontSize: 12,
    fontWeight: "300",
  },
} as const;

export default {
  colors: {
    light: {
      tint: {
        primary: Colors.brand.primary[300],
        secondary: Colors.brand.secondary[300],
        tertiary: Colors.brand.tertiary[300],
      },
      card: Colors.neutral[100],
      background: Colors.neutral[300],
      text: Colors.neutral[900],
      secondaryText: Colors.neutral[600],
      tertiaryText: Colors.neutral[400],
      divider: Colors.neutral[300],
      border: Colors.neutral[300],
      disabled: Colors.neutral[300],
      warning: Colors.functional.warning[300],
      error: Colors.functional.error[100],
      success: Colors.functional.success[100],
      info: Colors.functional.info[100],
    },
  },
  shadow: {
    s: 4,
    m: 8,
    l: 12,
  },
  icon: {
    s: 24,
    m: 32,
    l: 48,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  typography,
};
