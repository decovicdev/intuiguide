import {FlexStyle} from 'react-native'
import styled, { StyledComponent } from '@emotion/native';

interface SizeProps {
  h?:FlexStyle['height']
  w?:FlexStyle['width']
  maxH?:FlexStyle['maxHeight']
  maxW?:FlexStyle['maxWidth']
  size?:FlexStyle['width']
}



const withSize = <T extends object> (Component:StyledComponent<T,any,any>)
:StyledComponent<T&SizeProps> =>{
  return  styled(Component)((props:SizeProps)=>{
    const {h,w,maxH,maxW,size} = props
      return {
        height:h || size,
        width:w || size,
        maxHeight:maxH,
        maxWidth:maxW,
      }
    })
}

export default withSize