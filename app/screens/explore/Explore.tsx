import React from "react";

import Button from "../../components/shared/button/Button";
import Card from "../../components/shared/Card";
import { Image } from "../../components/shared/image";
import ImageBg from "../../components/shared/image/ImageBg";
import Indicator from "../../components/shared/Indicator";
import { FlatList } from "../../components/shared/list";
import ScrollView from "../../components/shared/ScrollView";
import { Body2, Title } from "../../components/shared/typography";
import View from "../../components/shared/View";
import Layout from "../../constants/Layout";
import { ExploreStackScreenProps } from "../../types/navigation";

const { height } = Layout.window;
const bg_h = height * 0.35;

const places = [
  {
    name: "Eiffel",
    image: require("../../assets/images/eiffel.png"),
  },
  {
    name: "Louvre",
    image: require("../../assets/images/louvre.png"),
  },
  {
    name: "Nice",
    image: require("../../assets/images/nice2.png"),
  },
];

interface ExploreProps extends ExploreStackScreenProps<"Explore"> {}

const Explore: React.FC<ExploreProps> = (props) => {
  const { navigation } = props;
  return (
    <Card mt={height * 0.35} pt="m">
      <Indicator />
      <ScrollView>
        <Title m="l">Recommendation for you</Title>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          horizontal
          data={places}
          keyExtractor={(item) => item.name}
        >
          {({ item }) => {
            return (
              <Button
                onPress={() => {
                  navigation.navigate("ExploreDetail");
                }}
              >
                <ImageBg source={item.image} size={136} place="center" mr="m">
                  <View
                    pos="absolute"
                    w="100%"
                    h="100%"
                    bg="#000"
                    borderRadius="s"
                    alpha={0.3}
                  />
                  <Body2 color="white">{item.name}</Body2>
                </ImageBg>
              </Button>
            );
          }}
        </FlatList>
        <Title m="l">Popular car travel in Paris</Title>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          horizontal
          data={places}
          keyExtractor={(item) => item.name}
        >
          {({ item }) => {
            return (
              <ImageBg source={item.image} size={136} place="center" mr="m">
                <View
                  pos="absolute"
                  w="100%"
                  h="100%"
                  bg="#000"
                  borderRadius="s"
                  alpha={0.3}
                />
                <Body2 color="white">{item.name}</Body2>
              </ImageBg>
            );
          }}
        </FlatList>
      </ScrollView>
    </Card>
  );
};
export default Explore;
