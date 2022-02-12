import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import ButtonWithText from '../../components/shared/button/ButtonWithText';

import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import Indicator from '../../components/shared/Indicator';
import FormField from '../../components/shared/input/FormField';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import View from '../../components/shared/View';

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = (props) => {
  return (
    <View flex={1} bg='primary'>
      <SafeAreaView flex={1} mt='l'>
        <Indicator />
        <Card flex={1} mt='s' p='l' borderRadius={['l', 0]}>
          <View alignS='center' my='l'>
            <Image source={require('../../assets/images/user-profile.png')} />
            <Card p={6} right={0} bottom={0} bg='primary' pos='absolute'>
              <Ionicons color='#fff' name='arrow-up' size={12} />
            </Card>
          </View>
          <Spacer />
          <View>
            <FormField value='Selena Prisicillia' />
            <FormField value='selenaprisicillia@gmail.com' />
            <FormField value='Selena   ' secureTextEntry />
            <FormField
              placeholder='Choose country'
              rightIcon={<Ionicons name='caret-down' size={24} color='gray' />}
            />
            <FormField
              placeholder='Choose city'
              rightIcon={<Ionicons name='caret-down' size={24} color='gray' />}
            />
          </View>

          <Spacer />

          <ButtonWithText bg='primary' label='Save profile' />
        </Card>
      </SafeAreaView>
    </View>
  );
};
export default EditProfile;
