import createThemedComponent from "../../hoc/createThemedComponent";
import { useThemeColors } from "../../hooks/useThemeColor";
import View from "./View";

// const Card: React.FC<React.ComponentProps<typeof View>> = (props) => {
//   const { card } = useThemeColors();
//   return <View bg={card} borderRadius='l' {...props} />;
// };

const Card = createThemedComponent(View)((props) => {
  const { card } = useThemeColors();
  return {
    bg: card,
    borderRadius: "l",
  };
});
export default Card;
