import { Box, Divider, HStack, VStack } from '@chakra-ui/react';

import PrimaryButton from '../shared/button/PrimaryButton';
import Image from '../shared/Image';
import Input from '../shared/Input';
import Link from '../shared/Link';
import Stack from '../shared/Stack';
import { Body1, Caption1 } from '../shared/typography';
import AuthProviderButton from './AuthProviderButton';

const LoginForm: React.FC = () => {
  return (
    <>
      <VStack align='stretch' alignSelf='stretch' spacing='4'>
        <Input placeholder='Email Address' />
        <Input placeholder='Password' />
        <PrimaryButton>Login</PrimaryButton>
      </VStack>
      <VStack align='stretch' spacing='12'>
        <HStack spacing={4}>
          <Divider />
          <Box>
            <Caption1 w='74px' color='gray.400'>
              or login with
            </Caption1>
          </Box>
          <Divider />
        </HStack>
        <Stack spacing='0'>
          <AuthProviderButton
            leftIcon={<Image src='/images/google.png' alt='google icon' />}
          >
            Google
          </AuthProviderButton>

          <AuthProviderButton
            leftIcon={<Image src='/images/facebook.png' alt='facebook icon' />}
          >
            Facebook
          </AuthProviderButton>
        </Stack>
        <HStack alignSelf='center'>
          <Body1 color='gray.400'>Don’t have any account?</Body1>
          <Link href='/register'>Register Now</Link>
        </HStack>
      </VStack>
    </>
  );
};

export default LoginForm;
