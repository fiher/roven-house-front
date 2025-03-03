import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Box
      as="button"
      px={4}
      py={2}
      borderRadius="md"
      bg="blue.500"
      color="white"
      _hover={{ bg: 'blue.600' }}
      onClick={onClick}
    >
      <Text>{label}</Text>
    </Box>
  );
};

export default Button;
