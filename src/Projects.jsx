import React, { useState } from "react";
import {
  SimpleGrid,
  Card,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  HStack,
  Badge,
  Stack,
  Button,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Wrap,
} from "@chakra-ui/react";

import Birding from "./assets/Birding.jpg";
import BirdingDemo from "./assets/BirdingDemo.webm";
import SillyStory from "./assets/SillyStory.jpg";
import SillyStoryDemo from "./assets/SillyStoryDemo.webm";
import Prince from "./assets/AdventureGame.jpg";
import PrinceDemo from "./assets/AdventureGameDemo.webm";
import GeoDash from "./assets/GeoDash.png";
import GeoDashDemo from "./assets/GeoDashDemo.webm";
import ForeYou from "./assets/ForeYou.jpg";
import ForeYouDemo from "./assets/ForeYouDemo.webm";
import CanonLaw from "./assets/CanonLaw.jpg";
import CanonLawDemo from "./assets/CanonLawDemo.webm";


export default function ProjectsCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [hovered, setHovered] = useState(null);

  const isMobile = window.innerWidth < 768

  const projects = [
    {
      title: "ForeYou Budgeting App",
      desc: "ForeYou is a financial planning app that eliminates the need for traditional budgeting. It features an intelligent transaction register that forecasts balances, tracks spending habits, and provides insightful reports. It helps users make informed financial decisions with a forward-looking approach. ForeYou also offers educational resources and personalized financial counseling.",
      image: ForeYou,
      video: ForeYouDemo,
      techStack: ["Ionic", "Firebase", "PostgreSQL", "Typescript"],
      liveLink: "https://foreyou.ai/",
      githubLink: "hidden",
    },
    {
      title: "Carolingian Canon Law Project",
      desc: "A humanities project exploring the legal texts of the Carolingian era. This project organizes, analyzes, and visualizes historical canon law manuscripts, providing an interactive way to view, transcribe, translate, and annotate medieval folia. Built with Blaze components and MeteorJS, it offers researchers and historians an accessible platform to navigate and interpret these foundational texts.",
      image: CanonLaw,
      video: CanonLawDemo,
      techStack: ["Meteor", "Blaze", "MongoDB", "Typescript"],
      liveLink: "https://ccl.rch.uky.edu/",
      githubLink: "hidden",
    },
    {
      title: "Adventure Game",
      desc: "This 'Le Petit Prince' themed game immerses players in a rich story-driven environment, blending React's powerful UI components with Django's robust back-end to create seamless data handling and interactivity. Players engage with real-time decision-making and a responsive interface, demonstrating my full-stack capabilities. Hosted on Fly.io, this project showcases an intricate front-to-back integration essential for scalable applications.",
      image: Prince,
      video: PrinceDemo,
      techStack: ["React", "Django", "Fly.io"],
      liveLink: "https://the-little-prince-returns.vercel.app/",
      githubLink: "https://github.com/CJMiller17/little-prince-client",
    },
    {
      title: "GeoDash World",
      desc: "GeoDash World is a customizable city exploration tool, developed using React and Node.js, that gamifies local learning with quizzes and scavenger hunts. Leveraging MongoDB and hosted on Render, it provides a dynamic map-based interface that allows users to discover landmarks, neighborhoods, and hidden gems. This project combines location-based education with interactive user engagement for a unique city experience.",
      image: GeoDash,
      video: GeoDashDemo,
      techStack: ["React", "Node.js", "Render", "MongoDB"],
      liveLink: "https://geodash-world-client-development.onrender.com/",
      githubLink: "https://github.com/chingu-voyages/v51-tier3-team-34",
    },
    {
      title: "Random Story Generator",
      desc: "Inspired by 'The Gruffalo,' this story generator uses JavaScript logic to create unique, amusing narratives each time. The project blends algorithmic creativity with interactive storytelling, providing a delightful experience for users. By experimenting with JavaScript functions and randomization, this project captures the whimsical charm of a beloved children's book in an innovative web app.",
      image: SillyStory,
      video: SillyStoryDemo,
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://cjmiller17.github.io/Silly-Story/",
      githubLink: "https://github.com/CJMiller17/Silly-Story",
    },
    {
      title: "Birding Website",
      desc: "A visually engaging birding website that brings together HTML, CSS, and JavaScript to create an interactive, user-friendly experience. This multi-page site lets users click through beautiful bird images and navigate effortlessly, showcasing a keen eye for design and responsive layouts. Built for enthusiasts, it also emphasizes aesthetic appeal and ease of use across devices.",
      image: Birding,
      video: BirdingDemo,
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://cjmiller17.github.io/Birding/",
      githubLink: "https://github.com/CJMiller17/Birding",
    },
  ];

  return (
    <>
      <Box
        bg="#023047"
        color="white"
        py="1"
        px="8"
        borderRadius="md"
        m="8"
        maxWidth="90%"
        mx="auto"
        textAlign="center"
      >
        <Heading
          fontSize="5xl"
          bgGradient="linear(to bottom, #FFB703, #FB8500)"
          bgClip="text"
        >
          Here's what I've been up to
          <Text fontSize=".7rem" letterSpacing={3}>Hover over image for demo</Text>
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing=".5">
        {projects.map((project, index) => (
          <Card
            key={index}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            m="4"
            display="flex"
            flexDirection="column"
            height="93%"
            bg="#023047"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {isMobile || (hovered === index && project.video) ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginTop: "1rem",
                }}
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                width="100%"
                height="200px"
                mt="1rem"
              />
            )}
            <Stack p="4">
              <CardBody mt="-10" maxH="120px">
                <Heading
                  size="md"
                  noOfLines={1}
                  color="white"
                  textAlign="center"
                  bgGradient="linear(to bottom, #FFB703, #FB8500)"
                  bgClip="text"
                >
                  {project.title}
                </Heading>
                <Text
                  fontSize=".9rem"
                  color="white"
                  maxHeight="90px"
                  noOfLines={4}
                >
                  {project.desc}
                </Text>
                <Button
                  color="white"
                  variant="unstyled"
                  border="none"
                  fontSize=".8rem"
                  _hover={{ textDecoration: "underline", color: "#FFB703" }}
                  onClick={() => setIsModalOpen(index)}
                >
                  See More
                </Button>
                <Modal
                  isOpen={isModalOpen === index}
                  onClose={() => setIsModalOpen(null)}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader color="#023047" textAlign="center">
                      {project.title}
                    </ModalHeader>
                    <ModalCloseButton
                      sx={{
                        color: "#023047",
                        border: "none",
                        borderRadius: "50%",
                        _hover: { bg: "#FFB703" },
                        _focus: { boxShadow: "none" },
                      }}
                    />
                    <ModalBody>
                      <Text color="#023047">{project.desc}</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        bg="#023047"
                        color="white"
                        border="none"
                        borderRadius="md"
                        _hover={{ bg: "#FFB703" }}
                        _focus={{ boxShadow: "none" }}
                        onClick={() => setIsModalOpen(null)}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Wrap mt="4" spacing="2" maxH="40px">
                  {project.techStack.map((tech, i) => (
                    <Badge
                      color="#023047"
                      border="1px solid"
                      borderColor="#8ECAE6"
                      borderRadius="lg"
                      key={i}
                      mb={{ base: 2, md: 0 }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </Wrap>
              </CardBody>
              <CardFooter mt="10">
                <HStack mt="4" spacing="4" justifyContent="flex-end">
                  <Button
                    as="a"
                    href={project.liveLink}
                    target="_blank"
                    variant="outline"
                    color="white"
                    textDecoration="none"
                    _hover={{ color: "#FFB703", borderColor: "#FFB703" }}
                    mt={6}
                  >
                    Live
                  </Button>
                  {project.githubLink !== "hidden" && (
                  <Button
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    variant="outline"
                    color="white"
                    textDecoration="none"
                    _hover={{ color: "#FFB703", borderColor: "#FFB703" }}
                    mt={6}
                  >
                    Code
                    </Button>
                  )}
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
