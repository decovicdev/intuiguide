import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../components/shared/Text';
import View from '../components/shared/View';

import { RootStackScreenProps } from '../types/navigation';

const NotFound: React.FC<RootStackScreenProps<'NotFound'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFound;
