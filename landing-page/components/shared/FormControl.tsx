import {
  FormErrorIcon,
  FormControl as _FormControl,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { FieldProps } from "formik";
import { FC } from "react";

interface FormControlProps extends FieldProps {
  InputComponent: FC;
}

const FormControl: FC<FormControlProps> = (props) => {
  const {
    field,
    form: { errors, touched },
    InputComponent,
    ...rest
  } = props;

  const isInvalid = Boolean(errors[field.name] && touched[field.name]);
  return (
    <_FormControl isInvalid={isInvalid}>
      <InputComponent {...field} {...rest} />
      <FormErrorMessage>
        <FormErrorIcon />
        {errors[field.name]}
      </FormErrorMessage>
    </_FormControl>
  );
};
export default FormControl;
