import React from "react";
import { StyleSheet } from "react-native";
import { Fonts, Sizes } from "../../../constants/Styles";
import { useThemeColors } from "../../../hooks/useThemeColor";
import Card from "../Card";
import Text from "../Text";
import View from "../View";
import Input from "./Input";

const { s, m } = Sizes.spacing;

interface FormFieldProps extends React.ComponentProps<typeof Input> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  containerProps?: React.ComponentProps<typeof View>;
}

const FormField: React.FC<FormFieldProps> = ({
  leftIcon,
  rightIcon,
  label,
  style,
  containerProps,
  ...props
}) => {
  const { card, text } = useThemeColors();
  return (
    <Card
      bg="#F5F5F5"
      isRound
      mb="m"
      direction="row"
      align="center"
      p="m"
      px="l"
      {...containerProps}
    >
      {leftIcon}
      <Input
        ml={leftIcon ? "m" : 0}
        mr={rightIcon ? "m" : 0}
        fontSize={14}
        fontWeight="400"
        flex={1}
        placeholderTextColor="gray"
        {...props}
      />
      {rightIcon}
    </Card>
  );
};

export default FormField;
