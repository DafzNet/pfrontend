// src/pages/SubmitBid.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, VStack, useToast } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitBid = () => {
  const [amount, setAmount] = useState('');
  const [documents, setDocuments] = useState('');
  const { rfpId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bids', {
        rfpId,
        supplierId: localStorage.getItem('userId'), // Assuming the user is a supplier
        amount: parseFloat(amount),
        documents,
      });
      toast({
        title: 'Bid submitted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/rfps');
    } catch (error) {
      toast({
        title: 'Failed to submit bid',
        description: error.response?.data?.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="container.sm" mx="auto" mt={16}>
      <Heading mb={8}>Submit Bid for RFP #{rfpId}</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Bid Amount</FormLabel>
            <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Documents (URLs or descriptions)</FormLabel>
            <Input value={documents} onChange={(e) => setDocuments(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Submit Bid
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SubmitBid;
