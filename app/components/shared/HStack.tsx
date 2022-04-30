import React from "react";
import createThemedComponent from "../../hoc/createThemedComponent";

import View from "./View";

// const HStack: React.FC<React.ComponentProps<typeof View>> = (props) => {
//   return <View align='center' {...props} direction='row' />;
// };

const HStack = createThemedComponent(View)({
  direction: "row",
  align: "center",
  flexGrow: 1,
  flexShrink: 0,
  flex: 1,
});

export default HStack;
