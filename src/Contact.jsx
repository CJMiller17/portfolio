import * as React from "react";
import { IconButton, Link, Card, CardBody, Text, Heading, Stack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




function Contact() {
  return (
    <Card
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="radial-gradient(circle, #B5BAD0, #416788)"
      height="100vh"
    >
      <CardBody
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "4" }}
        bg="linear-gradient(to bottom, #d3d3d3, gray)"
        borderRadius="lg"
        boxShadow="dark-lg"
        margin="3rem"
      >
        <Heading
          fontSize="7rem"
          color="white"
          m="1rem"
          fontFamily="Koh Santepheap"
        >
          Cody Miller
        </Heading>
        <Text
          textAlign="center"
          fontFamily="Koh Santepheap"
          color="white"
          fontSize="1.5rem"
          fontWeight="semi-bold"
        >
          Feel free to contact me here:
        </Text>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-around"
          margin="1rem"
        >
          <IconButton
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="6.7rem"
            icon={<MdEmail color="#81D2C7" />}
            _hover={{ bgColor: "white" }}
            as={Link}
            href="mailto:C.JMiller17@yahoo.com"
            target="_blank"
          />

          <IconButton
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="5.7rem"
            icon={<FaLinkedin color="#81D2C7" />}
            _hover={{ bgColor: "white" }}
            as={Link}
            href="https://www.linkedin.com/in/cjmiller17/"
            target="_blank"
          />

          <IconButton
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="5.7rem"
            icon={<FaGithub color="#81D2C7" />}
            _hover={{ bgColor: "white" }}
            as={Link}
            href="https://github.com/CJMiller17"
            target="_blank"
          />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Contact
