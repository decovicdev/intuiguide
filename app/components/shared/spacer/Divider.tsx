import styled from '@emotion/native';
import { StyleSheet } from 'react-native';

import View from '../View';

interface DividerProps {
  vertical?: boolean;
}

const Divider = styled(View)({
  height: StyleSheet.hairlineWidth * 2,
  backgroundColor: 'lightgray',
});

export default Divider;
