import { Spacer } from "@chakra-ui/react";

import LeftSide from "../../shared/LeftSide";
import RightSide from "../../shared/RightSide";
import Stack from "../../shared/Stack";
import LoginForm from "./LoginForm";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <Stack gap="0" spacing="0" alignItems="center">
      <LeftSide />
      <Spacer />
      <RightSide
        title="Login to Your Account"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium
      nulla cras molestie in sed. Eget orci"
      >
        <LoginForm />
      </RightSide>
      <Spacer />
    </Stack>
  );
};

export default LoginPage;
