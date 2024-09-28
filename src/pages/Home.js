// src/pages/Home.js
/*import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box maxW="container.xl" mx="auto" py={16}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to the Procurement Platform
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Streamline your procurement process with our cutting-edge platform.
        </Text>
        <Button as={RouterLink} to="/register" colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
*/


// src/pages/Home.js
import React from 'react';
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearch, FaHandshake, FaChartLine } from 'react-icons/fa';

const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description }) => (
  <VStack
    align="start"
    p={5}
    bg={useColorModeValue('white', 'gray.700')}
    rounded="lg"
    shadow="md"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
  >
    <Box fontSize="3xl" color="teal.500">
      {icon}
    </Box>
    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </VStack>
);

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={5}>
              <Heading as="h1" size="2xl">
                Streamline Your Procurement Process
              </Heading>
              <Text fontSize="xl">
                Efficient, transparent, and cost-effective procurement solutions for your business.
              </Text>
              <HStack>
                <Button as={RouterLink} to="/register" colorScheme="teal" size="lg">
                  Get Started
                </Button>
                <Button as={RouterLink} to="/login" variant="outline" size="lg">
                  Login
                </Button>
              </HStack>
            </VStack>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/images/procurement.jpg" alt="Procurement illustration" rounded="md" />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose Our Platform?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureCard
              icon={<FaSearch />}
              title="Efficient RFP Management"
              description="Easily create, distribute, and manage RFPs in one centralized platform."
            />
            <FeatureCard
              icon={<FaHandshake />}
              title="Streamlined Supplier Collaboration"
              description="Connect with qualified suppliers and manage bids effortlessly."
            />
            <FeatureCard
              icon={<FaChartLine />}
              title="Data-Driven Decisions"
              description="Leverage analytics to make informed procurement decisions and optimize spending."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={5}>
              <Text fontSize="lg">
                1. Create and publish RFPs
              </Text>
              <Text fontSize="lg">
                2. Receive and evaluate bids from suppliers
              </Text>
              <Text fontSize="lg">
                3. Select the best offer and award the contract
              </Text>
              <Text fontSize="lg">
                4. Manage the procurement process from start to finish
              </Text>
            </VStack>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src="/images/hero.jpg" alt="How it works illustration" rounded="md" />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
