import { Sizes } from "../constants/Styles";

const { spacing } = Sizes;
type Spacing = keyof typeof spacing;

export default function valueFromSpacing(value: Spacing | number | undefined) {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  return spacing[value];
}
