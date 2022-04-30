import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { memo, useCallback, useMemo, useState } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Button from "../../components/shared/button/Button";
import Card from "../../components/shared/Card";
import HStack from "../../components/shared/HStack";
import { Image } from "../../components/shared/image";
import Indicator from "../../components/shared/Indicator";
import { FlatList } from "../../components/shared/list";
import {
  Body1,
  Body2,
  Caption2,
  Title,
} from "../../components/shared/typography";
import View from "../../components/shared/View";
import Layout from "../../constants/Layout";
import createThemedComponent from "../../hoc/createThemedComponent";
import withClassComponent from "../../hoc/withClassComponent";
import { FavoriteStackScreenProps } from "../../types/navigation";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const { height } = Layout.window;
const bg_height = height * 0.35;
const itinerary_img_size = 110;
const action_btn_width = 72;
const itineraries = [
  {
    label: "5 days to Paris",
    city: "Paris",
    duration: "2 days",
    distance: "82 km",
    image: require("../../assets/images/paris.png"),
  },
  {
    label: "7 days to Lyon",
    duration: "3 days",
    distance: "100 km",
    city: "Lyon",
    image: require("../../assets/images/lyon.png"),
  },
  {
    label: "5 days to nice",
    duration: "1 days",
    distance: "8 km",
    city: "Nice",
    image: require("../../assets/images/nice.png"),
  },
];
const AnimatedHStack = Animated.createAnimatedComponent(
  withClassComponent(HStack)
);

interface FavoriteProps extends FavoriteStackScreenProps<"Favorite"> {}

const Favorite: React.FC<FavoriteProps> = (props) => {
  const { navigation } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleNavigateToEdit = () => {
    navigation.navigate("EditFavorite");
  };

  return (
    <View flex={1}>
      <Image
        w="100%"
        h={bg_height}
        source={require("../../assets/images/bg2.png")}
      />
      <Card flex={1} mt={-20} pt="m" borderRadius={["l", 0]} px="l">
        <Indicator />
        <HStack my="l" justify="space-between">
          <Title>Your itenerary</Title>
          <Button>
            <Body1 color={isEditing ? "red" : "primary"}>
              {isEditing ? "Cancel" : "Edit"}
            </Body1>
          </Button>
        </HStack>
        <FlatList data={itineraries} keyExtractor={(item) => item.label}>
          {useCallback(
            ({ item }) => (
              <FavoriteItem
                item={item}
                handleNavigateToEdit={handleNavigateToEdit}
              />
            ),
            []
          )}
        </FlatList>
      </Card>
    </View>
  );
};

interface FavoriteItemProps {
  item: typeof itineraries[0];
  handleNavigateToEdit: () => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = memo((props) => {
  const { item, handleNavigateToEdit } = props;
  const x = useSharedValue(0);
  const progress = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      x: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
    },
    onActive: ({ translationX }, ctx) => {
      if (translationX < 0 || x.value < 0) {
        x.value = translationX + ctx.x;
        progress.value = x.value / action_btn_width;
      }
    },
    onEnd: () => {
      if (x.value > -action_btn_width) {
        x.value = withSpring(0);
        progress.value = 0;
      } else {
        x.value = withSpring(-action_btn_width);
        progress.value = 1;
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={animatedStyle}>
        <HStack mb="m" align="stretch">
          <Image size={itinerary_img_size} source={item.image} />
          <View
            pos="absolute"
            size={itinerary_img_size}
            bg="#000"
            alpha={0.3}
            borderRadius="s"
            place="center"
          >
            <Body2 color="white">{item.city}</Body2>
          </View>
          <View ml="m">
            <Title>{item.label}</Title>
            <Caption2 color="gray">usually takes {item.duration}</Caption2>
            <Caption2 color="gray">{item.distance} long route</Caption2>
          </View>
          <RightActions
            progress={progress}
            handleNavigateToEdit={handleNavigateToEdit}
          />
        </HStack>
      </Animated.View>
    </PanGestureHandler>
  );
});

const ActionButton = createThemedComponent(Button)({
  place: "center",
  w: action_btn_width,
  alpha: 0.2,
});

interface RightActionsProps {
  handleNavigateToEdit: () => void;
  progress: SharedValue<number>;
}

const RightActions: React.FC<RightActionsProps> = (props) => {
  const { progress, handleNavigateToEdit } = props;

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [action_btn_width + 20, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });

  return (
    <AnimatedHStack ml="m" style={animatedStyle} mb="m" align="stretch">
      <ActionButton onPress={handleNavigateToEdit} bg="green">
        <MaterialIcons name="edit" size={24} color="green" />
      </ActionButton>
      <ActionButton bg="red">
        <FontAwesome5 name="trash" size={18} color="red" />
      </ActionButton>
    </AnimatedHStack>
  );
};

export default Favorite;
