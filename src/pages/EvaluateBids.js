
// src/pages/EvaluateBids.js
import React, { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, useToast } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EvaluateBids = () => {
  const [bids, setBids] = useState([]);
  const { rfpId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bids/${rfpId}`);
        setBids(response.data);
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    };
    fetchBids();
  }, [rfpId]);

  const handleEvaluate = async () => {
    try {
      await axios.post('http://localhost:5000/api/bids/evaluate', { rfpId });
      toast({
        title: 'Bids evaluated successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/rfps');
    } catch (error) {
      toast({
        title: 'Failed to evaluate bids',
        description: error.response?.data?.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="container.xl" mx="auto" mt={16}>
      <Heading mb={8}>Evaluate Bids for RFP #{rfpId}</Heading>
      <Table variant="simple" mb={8}>
        <Thead>
          <Tr>
            <Th>Supplier ID</Th>
            <Th>Amount</Th>
            <Th>Documents</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bids.map((bid) => (
            <Tr key={bid.id}>
              <Td>{bid.supplierId}</Td>
              <Td>${bid.amount.toFixed(2)}</Td>
              <Td>{bid.documents}</Td>
              <Td>{bid.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button onClick={handleEvaluate} colorScheme="teal">
        Evaluate Bids
      </Button>
    </Box>
  );
};

export default EvaluateBids;
