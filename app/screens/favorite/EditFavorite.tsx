import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import ButtonWithText from "../../components/shared/button/ButtonWithText";
import Card from "../../components/shared/Card";
import Indicator from "../../components/shared/Indicator";
import FormField from "../../components/shared/input/FormField";
import { Spacer } from "../../components/shared/spacer";
import { Title } from "../../components/shared/typography";
import View from "../../components/shared/View";
import { FavoriteStackScreenProps } from "../../types/navigation";

interface EditFavoriteProps extends FavoriteStackScreenProps<"EditFavorite"> {}

const EditFavorite: React.FC<EditFavoriteProps> = (props) => {
  const { navigation } = props;
  return (
    <View flex={1} bg="#000" alpha={0.3}>
      <Spacer />
      <Indicator />
      <Card borderRadius={["l", 0]} p="l" mt="s">
        <Title my="l">Edit itinerary</Title>
        <FormField
          leftIcon={<MaterialIcons name="edit" size={20} color="gray" />}
          value="5 days to Paris"
        />
        <ButtonWithText
          onPress={() => {
            navigation.goBack();
          }}
          mt="l"
          label="Save itinerary"
        />
      </Card>
    </View>
  );
};
export default EditFavorite;
