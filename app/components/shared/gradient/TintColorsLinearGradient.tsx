import styled from 'styled-components';

import {
  PRIMARY_TINT_COLOR,
  SECONDARY_TINT_COLOR,
} from '../../../constants/Colors';
import LinearGradient from './LinearGradient';

const TintColorsLinearGradient = styled(LinearGradient).attrs((props) => ({
  colors: [PRIMARY_TINT_COLOR, SECONDARY_TINT_COLOR],
}))``;

export default TintColorsLinearGradient;
