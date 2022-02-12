import React from 'react';
import { StyleSheet } from 'react-native';

import Input from './Input';
import { Sizes } from '../../../constants/Styles';
import Icon from '../Icon';
import View from '../View';

const { s, m } = Sizes.spacing;

interface SearchFieldProps extends React.ComponentProps<typeof Input> {}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  return (
    <View
      borderColor={props.editable ? 'primary' : ('#ccc' as any)}
      style={[defaultStyle.container]}
    >
      <Icon source={require('../../../assets/images/search.png')} />
      <Input style={defaultStyle.input} placeholder='Search' {...props} />
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    // borderColor: '#999',
    borderWidth: 2,
    padding: s,
    flex: 1,
    paddingHorizontal: m,
    flexDirection: 'row',
    borderRadius: 100,
  },
  input: {
    marginLeft: s,
    fontSize: 17,
    flex: 1,
  },
});

export default SearchField;
