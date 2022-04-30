import React from "react";

import Card from "../../components/shared/Card";
import { Image } from "../../components/shared/image";
import Indicator from "../../components/shared/Indicator";
import {
  Caption1,
  Caption2,
  Heading,
} from "../../components/shared/typography";
import View from "../../components/shared/View";
import Layout from "../../constants/Layout";
import withClassComponent from "../../hoc/withClassComponent";
import { ExploreStackScreenProps } from "../../types/navigation";

const { height } = Layout.window;
const bg_h = height * 0.35;

interface ExploreDetailProps extends ExploreStackScreenProps<"ExploreDetail"> {}

const ExploreDetail: React.FC<ExploreDetailProps> = (props) => {
  const { navigation } = props;
  return (
    <Card flex={1} mt={bg_h * 0.3} px="l" pt="m">
      <Indicator />
      <View my="l">
        <Heading textTransform="uppercase">Eiffel Tower</Heading>
        <Caption2 color="gray">75007 Paris, Prancis</Caption2>
      </View>
      <Image
        h={150}
        w="100%"
        borderRadius={"s"}
        source={require("../../assets/images/eiffel2.png")}
      />
      <Caption1 color="gray" mt="l">
        If you’re going to visit the romantic city of Paris during your trip to
        France, then one of the best things that you can do is to visit the
        world famous Eiffel Tower and climb all the way to its tippy top. Book
        through and get to experience the climb of your life by going up several
        flights of stairs and riding an elevator to reach its highest levels!
        Not only will you get the thrill of going on a quick journey up inside a
        looming structure that pierces through the clouds, you’ll also get
        toured around by a fun and engaging guide, who will share entertaining
        stories regarding the history of the tower as well as interesting
        factoids about its significance to the country and about its creator,
        Gustave Eiffel.
      </Caption1>
    </Card>
  );
};
export default ExploreDetail;
