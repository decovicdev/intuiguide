import { Spacer } from '@chakra-ui/react';

import LeftSide from '../components/auth/LeftSide';
import LoginForm from '../components/auth/LoginForm';
import RightSide from '../components/auth/RightSide';
import Stack from '../components/shared/Stack';

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <Stack gap='0' spacing='0' alignItems='center'>
      <LeftSide />
      <Spacer />
      <RightSide
        title='Login to Your Account'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium
      nulla cras molestie in sed. Eget orci'
      >
        <LoginForm />
      </RightSide>
      <Spacer />
    </Stack>
  );
};

export default Login;
