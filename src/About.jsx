import { Container, Stack, Box, Heading } from "@chakra-ui/react";

const About = () => {

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
            bg="rgba(24, 25, 26, 0.8)"
            borderRadius="md"
            borderColor="white"
            border
            boxShadow="xl"
            style={{
              backdropFilter: "blur(100px)", // Blur effect
              WebkitBackdropFilter: "blur(10px)", // Safari support
            }}
          >
            <Stack spacing="6">
              <Heading
                fontFamily="Strike Brush"
                fontWeight="100"
                textAlign="center"
                fontSize="6xl"
                m="0"
                bgGradient="linear(to bottom, #FFF455, #FFC700, #EE4E4E)"
                bgClip="text"
              >
                A little about me
              </Heading>
              <div className="about-section">
                <p>
                  My entire world changed on November 16th, 2023. My wife and I
                  found out that she was pregnant, and our whole world was about
                  to be different. You see, I was a banker here in town and I quite
                  liked my job. And although banking hours are amazing, I knew
                  that I wouldn't be home as often as I would like. I didn't
                  want to come home to stories about my sons first time crawling
                  or walking. I didn't want to be told about his first words; I
                  wanted to experience them. I wanted to be right there when
                  they happened.
                </p>
              </div>
              <div className="about-section">
                <p>
                  That is what prompted me to start looking into how to work
                  from home. Which lead me on a journey to becoming a Full Stack
                  Developer. I spent 16 intense weeks learning all sorts of
                  technologies, from Javascript and React to Python and Django.
                  We learned SQL and DevOps, as well as RESTful APIs.
                </p>
              </div>
              <div className="about-section">
                <p>
                  Apart from being a family man, I am also really involved in my
                  community, both local and international. Locally, I've helped
                  teach refugees English as a second language for a number of
                  years. I mentor middle schoolers in Social Emotional Learning
                  (SEL), to help them cope with the very real problems they face
                  at home and at school. Several times a year, you will find me
                  distributing food locally.
                </p>
              </div>
              <div className="about-section">
                <p>
                  When I am abroad, more often than not, you will find me also
                  distributing food to communities. In 2022, I helped facilitate
                  a trip that helped a local clinic administer healthcare to an
                  entire remote area of Kenya. We made sure everyone was able to
                  see a local doctor and went home with supplies to stock their
                  medicine cabinets. In Kenya, we also started a women's
                  business empowerment group that helped women start their own
                  businesses. I was part of a team that helped distribute funds,
                  food, and hope to Ukrainians that were displaced by Russia's
                  invasion. Each Ukrainian we helped was able to stay in a warm
                  place, when they didn't have electricity. My job was to create
                  forms that complied with US counter-terrorism law.
                </p>
              </div>
              <div className="about-section">
                <p>
                  Web Development might seem like an odd choice for someone who
                  is more like a humanitarian than a software engineer. However,
                  web development fits perfectly into who I am and where I would
                  like to go. The internet creates opportunities that
                  didn't exist just a generation ago. I don't have to work for a
                  non-profit, struggling to provide for my growing family, in
                  order to do non-profit work. As a web developer, I can work
                  anywhere in the world as I provide for my family and continue
                  to do the thing that I love; helping others.
                </p>
              </div>
            </Stack>
          </Box>
        </Stack>
      </Container>
    );
}
export default About