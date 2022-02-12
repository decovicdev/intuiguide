import styled,{StyledComponent} from '@emotion/native';

import {
  PRIMARY_TINT_COLOR,
  SECONDARY_TINT_COLOR,
} from '../constants/Colors';

interface ColorProps {
  color?: 'primary' | 'secondary' | 'white' | string ;
}


const withColor = <T extends object> (Component:StyledComponent<T,any>):
StyledComponent<T&ColorProps>=>{
  return  styled(Component)<ColorProps>(({color:clr})=>{
    const color =
    clr === 'primary'
        ? PRIMARY_TINT_COLOR
        : clr === 'secondary'
        ? SECONDARY_TINT_COLOR
        : clr

      return {
        color
      }
    })
}

export default withColor