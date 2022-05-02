import { Spacer } from "@chakra-ui/react";

import LeftSide from "../../shared/LeftSide";
import RightSide from "../../shared/RightSide";
import Stack from "../../shared/Stack";
import RegisterForm from "./RegisterForm";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  return (
    <Stack gap="0" pos="relative" spacing="0" alignItems="center">
      <LeftSide />
      <Spacer />
      <RightSide
        title="Create New Account"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium nulla cras molestie in sed. Eget orci fermentum neque, nisl est duis fames. Praesent tempus ac."
      >
        <RegisterForm />
      </RightSide>
      <Spacer />
    </Stack>
  );
};

export default RegisterPage;
