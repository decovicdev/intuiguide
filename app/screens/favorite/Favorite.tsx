import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/Card';
import HStack from '../../components/shared/HStack';
import { Image } from '../../components/shared/image';
import Indicator from '../../components/shared/Indicator';
import { FlatList } from '../../components/shared/list';
import {
  Body1,
  Body2,
  Caption2,
  Title,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import Layout from '../../constants/Layout';
import { FavoriteStackScreenProps } from '../../types/navigation';

const { height } = Layout.window;
const bg_height = height * 0.35;

const itinerary_img_size = 110;
const action_btn_width = 72;

const itineraries = [
  {
    label: '5 days to Paris',
    city: 'Paris',
    duration: '2 days',
    distance: '82 km',
    image: require('../../assets/images/paris.png'),
  },
  {
    label: '7 days to Lyon',
    duration: '3 days',
    distance: '100 km',
    city: 'Lyon',
    image: require('../../assets/images/lyon.png'),
  },
  {
    label: '5 days to nice',
    duration: '1 days',
    distance: '8 km',
    city: 'Nice',
    image: require('../../assets/images/nice.png'),
  },
];

interface FavoriteProps extends FavoriteStackScreenProps<'Favorite'> {}

const Favorite: React.FC<FavoriteProps> = (props) => {
  const { navigation } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleNavigateToEdit = () => {
    navigation.navigate('EditFavorite');
  };

  return (
    <View flex={1}>
      <Image
        w='100%'
        h={bg_height}
        source={require('../../assets/images/bg2.png')}
      />
      <Card flex={1} mt={-20} pt='m' borderRadius={['l', 0]} px='l'>
        <Indicator />
        <HStack my='l' justify='space-between'>
          <Title>Your itenerary</Title>
          <Button>
            <Body1 color={isEditing ? 'red' : 'primary'}>
              {isEditing ? 'Cancel' : 'Edit'}
            </Body1>
          </Button>
        </HStack>
        <FlatList data={itineraries} keyExtractor={(item) => item.label}>
          {({ item }) => {
            return (
              <Swipeable
                renderRightActions={() => {
                  return (
                    <RightActions handleNavigateToEdit={handleNavigateToEdit} />
                  );
                }}
              >
                <HStack mb='m' align='flex-start'>
                  <Image size={itinerary_img_size} source={item.image} />
                  <View
                    pos='absolute'
                    size={itinerary_img_size}
                    bg='#000'
                    alpha={0.3}
                    borderRadius='s'
                    place='center'
                  >
                    <Body2 color='white'>{item.city}</Body2>
                  </View>
                  <View ml='l'>
                    <Title>{item.label}</Title>
                    <Caption2 color='gray'>
                      usually takes {item.duration}
                    </Caption2>
                    <Caption2 color='gray'>{item.distance} long route</Caption2>
                  </View>
                </HStack>
              </Swipeable>
            );
          }}
        </FlatList>
      </Card>
    </View>
  );
};

const RightActions: React.FC<{ handleNavigateToEdit: () => void }> = ({
  handleNavigateToEdit,
}) => {
  return (
    <HStack mb='m' align='stretch'>
      <Button
        onPress={handleNavigateToEdit}
        bg='green'
        alpha={0.2}
        place='center'
        w={action_btn_width}
      >
        <MaterialIcons name='edit' size={24} color='green' />
      </Button>
      <Button bg='red' alpha={0.2} place='center' w={action_btn_width}>
        <FontAwesome5 name='trash' size={18} color='red' />
      </Button>
    </HStack>
  );
};

export default Favorite;
