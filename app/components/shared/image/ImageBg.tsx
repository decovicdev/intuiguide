import styled from '@emotion/native';

import withBg from '../../../hoc/withBg';
import withBorder from '../../../hoc/withBorder';
import withFlex from '../../../hoc/withFlex';
import withPosition from '../../../hoc/withPosition';
import withSize from '../../../hoc/withSize';
import withSpacing from '../../../hoc/withSpacing';

const ImageBg = withBg(
  withSpacing(
    withSize(withFlex(withPosition(withBorder(styled.ImageBackground({})))))
  )
);

export default ImageBg;
