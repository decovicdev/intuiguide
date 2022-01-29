import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Body1 } from '../shared/typography';

interface RightSideProps {
  title: string;
  description: string;
}

const RightSide: React.FC<RightSideProps> = ({
  description,
  title,
  children,
}) => {
  return (
    <VStack
      p='4'
      pb='20'
      pt={['4', '4', '4', '140px']}
      maxW='470px'
      align='stretch'
      spacing='8'
    >
      <Heading>{title}</Heading>
      <Body1 color='gray.400' maxW='470px'>
        {description}
      </Body1>
      {children}
    </VStack>
  );
};
export default RightSide;
