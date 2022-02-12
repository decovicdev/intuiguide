import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Button from '../../components/shared/button/Button';

import Card from '../../components/shared/Card';
import PremiumGradient from '../../components/shared/gradient/PremiumGradient';
import HStack from '../../components/shared/HStack';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import ScrollView from '../../components/shared/ScrollView';
import { Spacer } from '../../components/shared/spacer';
import { Body1, Title } from '../../components/shared/typography';
import View from '../../components/shared/View';
import Layout from '../../constants/Layout';
import { ProfileStackScreenProps } from '../../types/navigation';

const bonuses = [
  {
    label: 'Multiple saved itineraries',
    icon: require('../../assets/images/heart-gradient.png'),
  },
  {
    label: 'Unlimited Points',
    icon: require('../../assets/images/location-gradient.png'),
  },
  {
    label: 'Possibility of adding points',
    icon: require('../../assets/images/location-add.png'),
  },

  {
    label: 'Sync with Google & Waze',
    icon: require('../../assets/images/synchronization-arrows.png'),
  },
];
const { width } = Layout.window;

interface UpgradeToProProps extends ProfileStackScreenProps<'UpgradeToPro'> {}

const UpgradeToPro: React.FC<UpgradeToProProps> = (props) => {
  const { navigation } = props;
  return (
    <View flex={1}>
      <PremiumGradient />
      <SafeAreaView flex={1}>
        <HStack px='l' my='l' justify='space-between' w='60%'>
          <Ionicons name='caret-back' size={24} color='black' />
          <Title>Intuigo</Title>
        </HStack>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Card px='l' py='xl' flex={1} borderRadius={['l', 0]}>
            <HStack justify='space-between' h={150}>
              <View
                pos='absolute'
                w='100%'
                h='100%'
                borderRadius='m'
                overflow='hidden'
              >
                <PremiumGradient />
              </View>
              <Title ml='l' w={150}>
                Discount 50% for purchase today!
              </Title>
              <Image
                pos='absolute'
                right={0}
                source={require('../../assets/images/circles.png')}
              />
              <Image
                right={-5}
                top={-5}
                source={require('../../assets/images/freepik-character.png')}
              />
            </HStack>
            <Spacer />
            <View mt='xl'>
              <Title>What will you get?</Title>
              <HStack
                mt='m'
                justify='space-between'
                align='stretch'
                wrap='wrap'
              >
                {bonuses.map((bonus, index) => (
                  <View
                    borderRadius='s'
                    w='48%'
                    mb='m'
                    p='m'
                    borderColor='#000'
                    borderWidth={1}
                    key={index}
                  >
                    <Image source={bonus.icon} />
                    <Body1 mt='l'>{bonus.label}</Body1>
                  </View>
                ))}
              </HStack>
            </View>
            <Spacer />

            <Button
              overflow='hidden'
              onPress={() => {}}
              borderRadius={100}
              place='center'
            >
              <PremiumGradient />
              <Body1 fontWeight='700' my='m'>
                Upgrade for $34.99
              </Body1>
            </Button>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default UpgradeToPro;
