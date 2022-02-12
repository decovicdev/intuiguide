import styled from '@emotion/native';

import Text from '../Text';
import Theme from '../../../constants/Theme';
import React from 'react';

// const Heading = styled(Text)(Theme.typography.heading);
const Title = styled(Text)(Theme.typography.title);
const Body1 = styled(Text)(Theme.typography.body1);
const Body2 = styled(Text)(Theme.typography.body2);
const Caption1 = styled(Text)(Theme.typography.caption1);
const Caption2 = styled(Text)(Theme.typography.caption2);

const Heading: React.FC<React.ComponentProps<typeof Text>> = (props) => {
  return <Text {...props} {...Theme.typography.heading} />;
};

export { Heading, Title, Body1, Body2, Caption1, Caption2 };
