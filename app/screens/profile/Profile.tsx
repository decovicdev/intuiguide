import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import Button from '../../components/shared/button/Button';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Card from '../../components/shared/Card';
import PremiumGradient from '../../components/shared/gradient/PremiumGradient';
import HStack from '../../components/shared/HStack';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Body1, Body2, Title } from '../../components/shared/typography';
import View from '../../components/shared/View';
import { ProfileStackScreenProps } from '../../types/navigation';

const links = [
  {
    label: 'Edit Profile',
    icon: require('../../assets/images/edit.png'),
  },
  {
    label: 'Settings',
    icon: require('../../assets/images/setting.png'),
  },
  {
    label: 'Tell friends',
    icon: require('../../assets/images/users.png'),
  },
  {
    label: 'Rate and Review',
    icon: require('../../assets/images/star.png'),
  },
  {
    label: 'Feedback',
    icon: require('../../assets/images/message.png'),
  },
  {
    label: 'Logout',
    icon: require('../../assets/images/logout.png'),
  },
];

interface ProfileProps extends ProfileStackScreenProps<'Profile'> {}

const Profile: React.FC<ProfileProps> = (props) => {
  const { navigation } = props;
  return (
    <View flex={1} bg='primary'>
      <SafeAreaView flex={1}>
        <HStack justify='center' my='xl'>
          <Image
            source={require('../../assets/images/circles.png')}
            pos='absolute'
            right={0}
          />
          <Image source={require('../../assets/images/user-profile.png')} />
          <View ml='m'>
            <Title color='white'>Selena Tupang</Title>
            <Body1 color='white'>Free user</Body1>
          </View>
        </HStack>
        <Card borderRadius={['l', 0]} flex={1} px='l' pt='xl'>
          <Button
            overflow='hidden'
            onPress={() => navigation.navigate('UpgradeToPro')}
            borderRadius={100}
            place='center'
          >
            <PremiumGradient />
            <Body1 my='m'>Upgrade to Pro version</Body1>
          </Button>
          <View mt='l'>
            {links.map((link, index) => (
              <Button
                mb='l'
                key={index}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}
              >
                <HStack justify='space-between'>
                  <HStack>
                    <Image size={24} source={link.icon} />
                    <Body2 ml='s' color='gray'>
                      {link.label}
                    </Body2>
                  </HStack>
                  <Ionicons name='caret-forward' color='lightgray' size={24} />
                </HStack>
              </Button>
            ))}
          </View>
        </Card>
      </SafeAreaView>
    </View>
  );
};
export default Profile;
