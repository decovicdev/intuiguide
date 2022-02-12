import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from './Button';

const BackButton: React.FC = ({ children }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return <Button onPress={onPress}>{children}</Button>;
};

export default BackButton;
