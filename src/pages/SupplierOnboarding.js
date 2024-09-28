// src/pages/SupplierOnboarding.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';

const SupplierOnboarding = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [address, setAddress] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/suppliers/onboard', { name, registrationNumber, address });
      toast({
        title: 'Supplier onboarded successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setName('');
      setRegistrationNumber('');
      setAddress('');
    } catch (error) {
      toast({
        title: 'Onboarding failed',
        description: error.response?.data?.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="container.sm" mx="auto" mt={16}>
      <Heading mb={8}>Supplier Onboarding</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Registration Number</FormLabel>
            <Input value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SupplierOnboarding;
