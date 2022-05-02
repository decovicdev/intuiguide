import { object, string, boolean } from "yup";

const registerIntialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  acceptTerms: false,
};

const registerSchema = object().shape({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  acceptTerms: boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

export { registerSchema, registerIntialValues };
