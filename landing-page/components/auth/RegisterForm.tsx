import { Checkbox, HStack, VStack } from '@chakra-ui/react';

import PrimaryButton from '../shared/button/PrimaryButton';
import Input from '../shared/Input';
import Link from '../shared/Link';
import { Body1 } from '../shared/typography';

const RegisterForm: React.FC = () => {
  return (
    <>
      <VStack spacing='4' align='stretch'>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <Input placeholder='Email Address' />
        <Input placeholder='Password' />
        <HStack spacing='4' align='flex-start' px='4'>
          <Checkbox colorScheme='teal' size='lg' />
          <Body1>
            I agree to Intuiguide&apos;s
            <Link color='secondary'> Terms of Service </Link>
            and
            <Link color='secondary'> Privacy Policy </Link>
          </Body1>
        </HStack>
        <PrimaryButton>Register</PrimaryButton>
      </VStack>
      <HStack alignSelf='center'>
        <Body1 color='gray.400'>Have an account already?</Body1>
        <Link href='/login'>Login Now</Link>
      </HStack>
    </>
  );
};

export default RegisterForm;
