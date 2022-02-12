import styled from '@emotion/native';
import withBg from '../../hoc/withBg';
import withBorder from '../../hoc/withBorder';

import withFlex from '../../hoc/withFlex';
import withSpacing from '../../hoc/withSpacing';

const ScrollView = withSpacing(
  withFlex(withBg(withBorder(styled.ScrollView({}))))
);

export default ScrollView;
