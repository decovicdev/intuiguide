import Text from "../Text";
import Theme from "../../../constants/Theme";
import createThemedComponent from "../../../hoc/createThemedComponent";

const Heading = createThemedComponent(Text)(Theme.typography.heading);
const Title = createThemedComponent(Text)(Theme.typography.title);
const Body1 = createThemedComponent(Text)(Theme.typography.body1);
const Body2 = createThemedComponent(Text)(Theme.typography.body2);
const Caption1 = createThemedComponent(Text)(Theme.typography.caption1);
const Caption2 = createThemedComponent(Text)(Theme.typography.caption2);

export { Heading, Title, Body1, Body2, Caption1, Caption2 };
