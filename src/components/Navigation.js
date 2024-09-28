// Update src/components/Navigation.js to use the useAuth hook
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Spacer, Button } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box bg="teal.500" py={4}>
      <Flex maxW="container.xl" mx="auto" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          Procurement Platform
        </Link>
        <Spacer />
        {isAuthenticated ? (
          <>
            <Link as={RouterLink} to="/rfps" color="white" mr={4}>
              RFPs
            </Link>
            <Link as={RouterLink} to="/create-rfp" color="white" mr={4}>
              Create RFP
            </Link>
            <Button onClick={logout} colorScheme="teal" variant="outline" color="white">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link as={RouterLink} to="/login" color="white" mr={4}>
              Login
            </Link>
            <Link as={RouterLink} to="/register" color="white">
              Register
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;
