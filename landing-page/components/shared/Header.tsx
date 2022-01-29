import { Box, HStack, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import PrimaryButton from './button/PrimaryButton';
import Container from './Container';
import Logo from './Logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();

  return (
    <Box pos='absolute' zIndex={1} w='full'>
      <Container my='8'>
        <nav>
          <HStack justify={['center', 'space-between']}>
            <Logo />
            <HStack spacing='8' display={['none', 'none', 'flex']}>
              <Link href='/about'>About Us</Link>
              <PrimaryButton onClick={() => router.push('/register')}>
                Create Account
              </PrimaryButton>
            </HStack>
          </HStack>
        </nav>
      </Container>
    </Box>
  );
};
export default Header;
