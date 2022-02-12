import React from 'react';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import { Spacer } from '../../components/shared/spacer';
import { Caption1, Heading } from '../../components/shared/typography';

import View from '../../components/shared/View';
import Layout from '../../constants/Layout';
import { HomeStackScreenProps } from '../../types/navigation';

const { width } = Layout.window;

interface HomeProps extends HomeStackScreenProps<'Home'> {}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('CreateItinerary', {
      currentStep: 1,
      steps: 3,
    });
  };

  return (
    <View flex={1}>
      <View w={width} h={300}>
        <Image
          w='100%'
          h={300}
          bottom={0}
          top={0}
          pos='absolute'
          source={require('../../assets/images/splash.png')}
        />
      </View>
      <Card mt={-20} flex={1} borderRadius={['l', 0]}>
        <View w={280} m='l'>
          <Heading fontWeight='100' w={190}>
            PLAN YOUR TRIP
          </Heading>
          <Caption1 color='gray' mt='s'>
            Enjoy your car travel vacation with an intuiguide that is always
            ready to guide your journey from start to finish.
          </Caption1>
          <ButtonWithText
            onPress={onPress}
            mt='l'
            label='Create an itinerary'
          />
        </View>
      </Card>
    </View>
  );
};
export default Home;
