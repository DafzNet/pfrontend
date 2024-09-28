// src/pages/RFPList.js
import React, { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const RFPList = () => {
  const [rfps, setRFPs] = useState([]);

  useEffect(() => {
    const fetchRFPs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rfps');
        setRFPs(response.data);
      } catch (error) {
        console.error('Error fetching RFPs:', error);
      }
    };
    fetchRFPs();
  }, []);

  return (
    <Box maxW="container.xl" mx="auto" mt={16}>
      <Heading mb={8}>Request for Proposals (RFPs)</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Created At</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rfps.map((rfp) => (
            <Tr key={rfp.id}>
              <Td>{rfp.title}</Td>
              <Td>{rfp.description}</Td>
              <Td>{new Date(rfp.createdAt).toLocaleDateString()}</Td>
              <Td>
                <Link as={RouterLink} to={`/submit-bid/${rfp.id}`} mr={4}>
                  <Button colorScheme="teal" size="sm">
                    Submit Bid
                  </Button>
                </Link>
                <Link as={RouterLink} to={`/evaluate-bids/${rfp.id}`}>
                  <Button colorScheme="blue" size="sm">
                    Evaluate Bids
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RFPList;
