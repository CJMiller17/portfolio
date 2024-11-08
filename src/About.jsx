import { useState } from "react";

import {
  Container,
  Stack,
  Box,
  Heading,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

import FamilyPhoto from "./assets/FamilyPhoto.jpg";
import Development from "./assets/Development.jpeg";
import MiddleSchool from "./assets/MiddleSchool.jpg";
import Personal from "./assets/Personal.jpg";
import WebDev from "./assets/WebDev.jpg";


const About = () => {

  const aboutSections = [
    {
      imgSrc: FamilyPhoto,
      imgAlt: "Family Photo",
      text: "I'm a full-stack developer based in Kentucky with a beautiful wife and an amazing son. I’m passionate about all kinds of development: international, community, personal and especially web.",
    },
    {
      imgSrc: Development,
      imgAlt: "Development Work",
      text: "International travel is a big part of my life. I’ve help build orphanages, invested in women’s businesses, distributed food, and helped settle refugees.",
    },
    {
      imgSrc: MiddleSchool,
      imgAlt: "Helping at Middle School",
      text: "Giving back to my community is essential to me. I volunteer at middle schools, support at-risk youth, and help raise funds for local charities.",
    },
    {
      imgSrc: Personal,
      imgAlt: "Reading Books",
      text: "A mentor once said, 'Readers are leaders.' That stayed with me, so you’ll always find me reading, learning, and striving to grow.",
    },
    {
      imgSrc: WebDev,
      imgAlt: "Coding",
      text: "Web development is my passion. It’s a field full of endless opportunities to learn and improve, which I love.",
    },
  ];

  return (
    <Container
      zIndex="10"
      maxW="2xl"
      py={{ base: "20" }}
      px={{ base: "0", sm: "8" }}
      bg="transparent"
    >
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="#023047"
          borderRadius="md"
          boxShadow="xl"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", // Safari support
          }}
        >
          <Stack spacing="6">
            <Heading
              fontFamily="Montserrat"
              fontWeight="700"
              textAlign="center"
              fontSize="6xl"
              m="0"
              bgGradient="linear(to bottom, #FFB703, #FB8500)"
              bgClip="text"
            >
              A Little About Me
            </Heading>
            {aboutSections.map((section, index) => (
              <Flex
                key={index}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                align="center"
                gap="6"
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={section.imgSrc}
                  alt={section.imgAlt}
                  borderRadius="full"
                />

                <Text
                  fontSize="md"
                  fontFamily="Montserrat"
                  fontWeight="450"
                  color="white"
                  maxW="sm"
                >
                  {section.text}
                </Text>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;