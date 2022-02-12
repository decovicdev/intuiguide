import React from 'react';
import ButtonWithText from '../components/shared/button/ButtonWithText';
import Card from '../components/shared/Card';
import { Image } from '../components/shared/image';
import Text from '../components/shared/Text';
import { Body2, Heading } from '../components/shared/typography';
import View from '../components/shared/View';
import Layout from '../constants/Layout';
import { RootStackScreenProps } from '../types/navigation';

const { height, width } = Layout.window;

interface OnboardingProps extends RootStackScreenProps<'Onboarding'> {}

const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  return (
    <View flex={1}>
      <Image
        pos='absolute'
        top={0}
        left={0}
        bottom={0}
        w={width}
        source={require('../assets/images/onboarding.png')}
      />
      <Card
        borderRadius={['l', 0]}
        justify='space-between'
        h={350}
        w={width}
        p='l'
        pos='absolute'
        bottom={0}
      >
        <View maxW={325}>
          <Heading>Welcome!</Heading>
          <Body2 color='gray'>
            Enjoy your car travel vacation with an intuiguide that is always
            ready to guide your journey from start to finish.
          </Body2>
        </View>
        <ButtonWithText
          label='Start'
          onPress={() => navigation.navigate('RootTab')}
        />
      </Card>
    </View>
  );
};
export default Onboarding;
