import Theme from '../constants/Theme';
import useColorScheme from './useColorScheme';

export default function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Theme.colors.light & keyof typeof Theme.colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return useThemeColors()[colorName];
  }
}

export const useThemeColors = () => {
  return Theme.colors['light'];
};
