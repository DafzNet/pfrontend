import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Text fontSize="2xl">Welcome to the Procurement Platform</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
