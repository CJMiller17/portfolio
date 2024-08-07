import React, {useState} from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import "./App.css"

import Birding from "./assets/Birding.png";
import StoryGen from "./assets/Story.png"
import Clock from "./assets/Clock.png";
import MindReader from "./assets/Mind.png";
import Weather from "./assets/Weather.png";
import TicTacToe from "./assets/TicTac.png";
import Restaurant from "./assets/Food.png";
import ToDoList from "./assets/ToDo.png";
import Social from "./assets/Social.png";
import Prince from "./assets/Prince.png";
// import Birding from "./assets/Birding_screenshot.png";


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProjectsCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Adventure Game",
      text: "Developed an immersive adventure game with a seamlessly integrated front-end and back-end, showcasing proficiency in full-stack development. This project honed my skills in creating interactive, user-driven experiences with real-time data management.",
      image: Prince,
      link: "https://the-little-prince-returns.vercel.app/",
    },
    {
      title: "Birding Website",
      text: "Created a visually stunning birding website featuring multiple navigable pages and clickable images, emphasizing aesthetic design and user experience. This project enhanced my understanding of front-end development and responsive design principles.",
      image: Birding,
      link: "https://cjmiller17.github.io/Birding/",
    },
    {
      title: "Random Story Generator",
      text: "Designed a captivating random story generator inspired by the children's book 'The Gruffalo,' demonstrating creativity in algorithmic storytelling. This project improved my ability to implement logic for dynamic content generation.",
      image: StoryGen,
      link: "https://cjmiller17.github.io/Silly-Story/",
    },
    // {
    //   title: "Clock",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Clock,
    //   link: "https://cjmiller17.github.io/Alarm-Clock/",
    // },
    // {
    //   title: "Mind Reader",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: MindReader,
    //   link: "https://cjmiller17.github.io/mind-reader/",
    // },
    // {
    //   title: "Weather App",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Weather,
    //   link: "https://cjmiller17.github.io/weather-app/",
    // },
    // {
    //   title: "Tic Tac Toe",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: TicTacToe,
    //   link: "https://cjmiller17.github.io/terni-lapilli/",
    // },
    {
      title: "Restaurant",
      text: "Built a functional restaurant website with an intuitive search bar that retrieves data from an external API, showcasing my API integration skills. This project strengthened my proficiency in asynchronous JavaScript and data fetching techniques.",
      image: Restaurant,
      // link: "",
    },
    {
      title: "To Do List",
      text: "Developed an interactive to-do list application with editable input fields and dynamic color-changing status based on task deadlines, emphasizing task management and user interaction. This project advanced my knowledge of state management and real-time UI updates in JavaScript.",
      image: ToDoList,
      // link: "",
    },
    // {
    //   title: "Social Media Site",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image: Social,
    //   link: "",
    // },
  ];

  return (
    <Box
      pt="1.5rem"
      position={"relative"}
      height={"100vh"}
      width={"full"}
      overflow={"hidden"}
      // background="radial-gradient(circle, #B5BAD0, #416788)"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Box
              key={index}
              height={"xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container
                height="60px"
                display="flex"
                justifyContent="center"
                alignContent="center"
              >
                <Stack
                  p="1.3rem"
                  borderRadius="lg"
                  maxW={"xs"}
                  position="absolute"
                  top={{ base: "xl", md: "xl", lg: "xl" }}
                  left={{ base: "xl", md: "xl", lg: "xl" }}
                  // transform="translate(50%, -50%)"
                  background="radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))"
                  color="white"
                  textAlign="center"
                  textShadow="2px 2px 15px gray"
                >
                  <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontFamily="Strike Brush"
                    letterSpacing="2px"
                    display="flex"
                    alignSelf="center"
                    justifySelf="center"
                  >
                    {card.title}
                  </Text>
                  <Text
                    color="white"
                    fontSize={{ base: "md", lg: "lg" }}
                    _hover={{
                      transform: "scale(1)"
                    }}
                  >
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          </a>
        ))}
      </Slider>
    </Box>
  );
}
