import { Spacer } from '@chakra-ui/react';

import LeftSide from '../components/auth/LeftSide';
import RegisterForm from '../components/auth/RegisterForm';
import RightSide from '../components/auth/RightSide';
import Stack from '../components/shared/Stack';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <Stack gap='0' spacing='0' alignItems='center'>
      <LeftSide />
      <Spacer />
      <RightSide
        title='Create New Account'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, pretium nulla cras molestie in sed. Eget orci fermentum neque, nisl est duis fames. Praesent tempus ac.'
      >
        <RegisterForm />
      </RightSide>
      <Spacer />
    </Stack>
  );
};

export default Register;
