import styled, { StyledComponent } from '@emotion/native';

import { Sizes } from '../constants/Styles';
import valueFromSpacing from '../utils/valueFromSpacing';

const { spacing } = Sizes;

type Spacing = keyof typeof spacing | number;
interface SpacingProps {
p?: Spacing;
px?: Spacing;
py?: Spacing;
pl?: Spacing;
pr?: Spacing;
pt?: Spacing;
pb?: Spacing;
m?: Spacing;
mx?: Spacing;
my?: Spacing;
ml?: Spacing;
mr?: Spacing;
mt?: Spacing;
mb?: Spacing;
}


const withSpacing = <T extends object> (Component:StyledComponent<T,any>)
:StyledComponent<T&SpacingProps> =>{
  return  styled(Component)<SpacingProps>((props)=>{
    const padding = valueFromSpacing(props.p);
    const paddingLeft = valueFromSpacing(props.pl);
    const paddingTop = valueFromSpacing(props.pt);
    const paddingRight = valueFromSpacing(props.pr);
    const paddingBottom = valueFromSpacing(props.pb);
    const paddingHorizontal = valueFromSpacing(props.px);
    const paddingVertical = valueFromSpacing(props.py);

    const margin = valueFromSpacing(props.m);
    const marginLeft = valueFromSpacing(props.ml);
    const marginTop = valueFromSpacing(props.mt);
    const marginRight = valueFromSpacing(props.mr);
    const marginBottom = valueFromSpacing(props.mb);
    const marginHorizontal = valueFromSpacing(props.mx);
    const marginVertical = valueFromSpacing(props.my);
      return {
        padding,
        paddingHorizontal,
        paddingVertical,
        paddingRight,
        paddingLeft,
        paddingTop,
        paddingBottom,
        margin,
        marginVertical,
        marginHorizontal,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }
    })
}

export default withSpacing 