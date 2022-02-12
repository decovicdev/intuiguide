import React from 'react';
import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';
import View from '../View';

const SIZE = 16;

interface CheckCircleProps {
  onChange?: () => void;
  value: boolean;
}

const CheckCircle: React.FC<CheckCircleProps> = ({ onChange, value }) => {
  return (
    <View>
      <View
        style={{
          height: SIZE,
          width: SIZE,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: SIZE,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {value && (
          <View
            style={{
              backgroundColor: PRIMARY_TINT_COLOR,
              height: SIZE / 2,
              width: SIZE / 2,
              borderRadius: SIZE,
            }}
          />
        )}
      </View>
    </View>
  );
};
export default CheckCircle;
