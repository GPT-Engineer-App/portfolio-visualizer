import { Box, Flex, Text, VStack, Link, Container, Heading } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">Venture Capital Firm</Heading>
          <Box>
            <Link href="#about" p={2} color="white">About Us</Link>
            <Link href="#portfolio" p={2} color="white">Portfolio</Link>
            <Link href="#team" p={2} color="white">Team</Link>
            <Link href="#contact" p={2} color="white">Contact</Link>
          </Box>
        </Flex>
      </Box>
      <VStack spacing={8} p={8} align="stretch">
        <Box id="about" p={4}>
          <Heading as="h2" size="xl">About Us</Heading>
          <Text mt={4}>We are a leading venture capital firm that invests in innovative startups across various industries. Our mission is to empower entrepreneurs and foster cutting-edge technologies that can transform the market.</Text>
        </Box>
        <Box id="portfolio" p={4}>
          <Heading as="h2" size="xl">Portfolio</Heading>
          <Text mt={4}>Our portfolio includes a diverse range of successful companies that are leaders in their respective fields. We partner with visionary entrepreneurs to scale their operations and achieve remarkable growth.</Text>
        </Box>
        <Box id="team" p={4}>
          <Heading as="h2" size="xl">Team</Heading>
          <Text mt={4}>Our team comprises experienced investors, seasoned entrepreneurs, and industry experts who are passionate about building the future. We work closely with our portfolio companies to provide strategic guidance and support.</Text>
        </Box>
        <Box id="contact" p={4}>
          <Heading as="h2" size="xl">Contact</Heading>
          <VStack spacing={3}>
            <Link href="mailto:info@vcfirm.com" leftIcon={<FaEnvelope />}>info@vcfirm.com</Link>
            <Link href="https://linkedin.com" isExternal leftIcon={<FaLinkedin />}>LinkedIn</Link>
            <Link href="https://twitter.com" isExternal leftIcon={<FaTwitter />}>Twitter</Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;