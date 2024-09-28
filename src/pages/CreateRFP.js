// src/pages/CreateRFP.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRFP = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/rfps', { title, description });
      toast({
        title: 'RFP created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/rfps');
    } catch (error) {
      toast({
        title: 'Failed to create RFP',
        description: error.response?.data?.message || 'An error occurred',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="container.sm" mx="auto" mt={16}>
      <Heading mb={8}>Create Request for Proposal (RFP)</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Create RFP
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateRFP;
