import { Sizes } from '../constants/Styles';

const { spacing } = Sizes;
type Spacing = keyof typeof spacing;

export default function valueFromSpacing(variant: Spacing | number|undefined) {
  return typeof variant === 'number' ?
    variant: 
  variant? spacing[variant] : undefined
  ;
}

