import styled from '@emotion/native';

import withFlex from '../../hoc/withFlex';
import withSpacing from '../../hoc/withSpacing';
import withBg from '../../hoc/withBg';
import withBorder from '../../hoc/withBorder';
import withSize from '../../hoc/withSize';
import withPosition from '../../hoc/withPosition';

const View = withBg(
  withSpacing(withSize(withFlex(withPosition(withBorder(styled.View({}))))))
);

export default View;
