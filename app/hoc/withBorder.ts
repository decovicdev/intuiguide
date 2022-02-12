import {ColorValue, ViewStyle} from 'react-native'
import styled, { StyledComponent } from '@emotion/native';

import { Sizes } from '../constants/Styles';
import valueFromSpacing from '../utils/valueFromSpacing';
import { PRIMARY_TINT_COLOR,SECONDARY_TINT_COLOR } from '../constants/Colors';

const { spacing } = Sizes;

type Spacing = keyof typeof spacing |number ;


interface BorderProps {
  borderRadius?: [Spacing,Spacing,Spacing,Spacing]|[Spacing,Spacing]|Spacing;
  borderWidth?: [number,number,number,number]| [number,number]| number;
  borderColor?: ColorValue;
  borderStyle?:ViewStyle['borderStyle'];
  isRound?: boolean;
}






const withBorder = <T extends object> (Component:StyledComponent<T,any,any>)
:StyledComponent<T&BorderProps> =>{
  return  styled(Component)((props:BorderProps)=>{
 
    const {borderRadius:_borderRadius, borderWidth:_borderWidth,borderColor:_borderColor, isRound, borderStyle } = props;

    const borderColor = _borderColor === 'primary' ? PRIMARY_TINT_COLOR : _borderColor;

    const {
      borderLeftWidth= undefined,
      borderRightWidth = undefined,
      borderTopWidth = undefined,
      borderBottomWidth = undefined,
      borderWidth = undefined,
    } = Array.isArray(_borderWidth)?
    _borderWidth.length === 2 ?
    {
      borderLeftWidth: _borderWidth[0],
      borderTopWidth: _borderWidth[1],
      borderRightWidth: _borderWidth[0],
      borderBottomWidth:_borderWidth[1],

    }:{
      borderLeftWidth: _borderWidth[0],
      borderTopWidth: _borderWidth[1],
      borderRightWidth: _borderWidth[2],
      borderBottomWidth:_borderWidth[3],

    }:{
      borderWidth:_borderWidth
    }

    const {
      borderRadius = undefined,
      borderTopLeftRadius = undefined,
      borderTopRightRadius = undefined,
      borderBottomLeftRadius = undefined,
      borderBottomRightRadius = undefined,

    } = Array.isArray(_borderRadius) ? 
    _borderRadius.length === 2 ? 
    {
      borderTopLeftRadius:valueFromSpacing(_borderRadius[0]),
      borderTopRightRadius:valueFromSpacing(_borderRadius[0]),
      borderBottomLeftRadius:valueFromSpacing(_borderRadius[1]),
      borderBottomRightRadius:valueFromSpacing(_borderRadius[1]),

    }
    :{
      borderTopLeftRadius:valueFromSpacing(_borderRadius[0]),
      borderTopRightRadius:valueFromSpacing(_borderRadius[1]),
      borderBottomLeftRadius:valueFromSpacing(_borderRadius[2]),
      borderBottomRightRadius:valueFromSpacing(_borderRadius[3])
    }
    : {
      borderRadius:isRound ? 1000 :valueFromSpacing(_borderRadius),

    };
    
    

      return {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderRadius,
        borderColor,
        borderWidth,
        borderLeftWidth,
        borderRightWidth,
        borderTopWidth,
        borderBottomWidth,
        borderStyle,
      }
    })
}

export default withBorder