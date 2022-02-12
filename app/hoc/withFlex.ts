import { FlexStyle } from 'react-native';
import styled, { StyledComponent, } from '@emotion/native';

interface FlexProps {
  flex?: FlexStyle['flex'];
  direction?: FlexStyle['flexDirection'];
  align?: FlexStyle['alignItems'];
  alignS?: FlexStyle['alignSelf'];
  justify?: FlexStyle['justifyContent'];
  wrap?: FlexStyle['flexWrap'];
  place?: 'center'| 'flex-end'| 'flex-start';
  basis?: FlexStyle['flexBasis'];
}

const withFlex = <T extends object> (Component:StyledComponent<T,any,any>):StyledComponent<T&FlexProps>=>{
  return styled(Component)(
      (props:FlexProps)=>{
      const flexDirection = props.direction;
      const flexWrap = props.wrap;
      const alignItems =props.place || props.align;
      const justifyContent = props.place || props.justify;
      const alignSelf = props.alignS;
      const flex = props.flex;
      const flexBasis = props.basis;

        return {
          flex,
          flexBasis,
          flexDirection,
          alignSelf,
          flexWrap,
          alignItems,
          justifyContent,
        }
      })
}

export default withFlex