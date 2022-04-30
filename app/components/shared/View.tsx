import styled from "@emotion/native";

import withFlex from "../../hoc/withFlex";
import withSpacing from "../../hoc/withSpacing";
import withBg from "../../hoc/withBg";
import withBorder from "../../hoc/withBorder";
import withSize from "../../hoc/withSize";
import withPosition from "../../hoc/withPosition";
import withTransform from "../../hoc/withTransform";
import withShadow from "../../hoc/withShadow";

const View = withBg(
  withSpacing(
    withSize(
      withPosition(
        withFlex(withTransform(withBorder(withShadow(styled.View({})))))
      )
    )
  )
);

export default View;
