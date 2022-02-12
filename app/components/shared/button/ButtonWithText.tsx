import React from 'react';

import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';
import { Body1 } from '../typography';
import Button from './Button';

import ButtonWithElevation from './ButtonWithElevation';

interface ButtonWithTextProps
  extends React.ComponentProps<typeof ButtonWithElevation> {
  label: string;
}

const ButtonWithText: React.FC<ButtonWithTextProps> = ({
  label,
  bg = 'primary',
  ...props
}) => {
  let color: string | undefined;

  switch (bg) {
    case 'primary':
      color = 'white';
      break;
    case 'secondary':
      color = 'white';
      break;
    case 'white':
      color = PRIMARY_TINT_COLOR;
      break;
    default:
      color = 'black';
  }

  return (
    <Button bg={bg} place='center' py='m' borderRadius={100} {...props}>
      {props.children}
      <Body1 color={color}>{label}</Body1>
    </Button>
  );
};

export default ButtonWithText;
