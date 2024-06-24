import * as React from "react";
import { IconButton, Link, Card, CardBody, Text } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




function About() {
  return (
    <Card>
      <CardBody>
        <Text>Here are links to my contact information:</Text>

        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<MdEmail />}
          as={Link}
          to=""
        />

        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<FaLinkedin />}
          as={Link}
          to=""
        />

        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<FaGithub />}
          as={Link}
          to=""
        />
      </CardBody>
    </Card>
  );
}

export default About
