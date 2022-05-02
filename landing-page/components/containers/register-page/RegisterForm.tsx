import { Checkbox, HStack, VStack } from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps } from "formik";
import { useRouter } from "next/router";

import { registerIntialValues, registerSchema } from "../../../validation";
import PrimaryButton from "../../shared/button/PrimaryButton";
import FormControl from "../../shared/FormControl";
import Input from "../../shared/Input";
import Link from "../../shared/Link";
import { Body1 } from "../../shared/typography";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Formik
        initialValues={registerIntialValues}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          router.push("/");
        }}
      >
        <Form>
          <VStack spacing="4" align="stretch">
            <Field
              name="firstName"
              placeholder="First Name"
              component={FormControl}
              InputComponent={Input}
            />
            <Field
              name="lastName"
              placeholder="Last Name"
              component={FormControl}
              InputComponent={Input}
            />
            <Field
              name="email"
              placeholder="Email"
              component={FormControl}
              InputComponent={Input}
            />
            <Field
              name="password"
              component={FormControl}
              InputComponent={Input}
              placeholder="Password"
            />
            <Field
              name="acceptTerms"
              component={FormControl}
              InputComponent={(props: any) => (
                <Checkbox
                  {...props}
                  colorScheme="teal"
                  size="lg"
                  name="acceptTerms"
                >
                  <Body1>
                    I agree to Intuiguide&apos;s
                    <Link color="secondary"> Terms of Service </Link>
                    and
                    <Link color="secondary"> Privacy Policy </Link>
                  </Body1>
                </Checkbox>
              )}
            />
            <PrimaryButton type="submit">Register</PrimaryButton>
          </VStack>
        </Form>
      </Formik>
      <HStack alignSelf="center">
        <Body1 color="gray.400">Have an account already?</Body1>
        <Link href="/login">Login Now</Link>
      </HStack>
    </>
  );
};

export default RegisterForm;
