// src/components/Layout.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <Box>
      <Navigation />
      <Box maxW="container.xl" mx="auto" py={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
