import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";


function NavBar() {

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        bg="#023047"
        alignItems="center"
        boxShadow="2xl"
      >
        <Text
          as={Link}
          to="/"
          fontFamily="Montserrat"
          letterSpacing="2px"
          fontSize="2rem"
          mt=".5rem"
        >
          Cody Miller
        </Text>

        <Text as={Link} to="/about" fontFamily="Montserrat" letterSpacing="2px">
          About
        </Text>

        {/* <Text as={Link} to="/blog" fontFamily="Montserrat">
          Blog
        </Text> */}

        <Text
          as={Link}
          to="/projects"
          fontFamily="Montserrat"
          letterSpacing="2px"
        >
          Projects
        </Text>

        <Text
          as={Link}
          to="/resume"
          fontFamily="Montserrat"
          letterSpacing="2px"
        >
          Résumé
        </Text>

        <Text
          as={Link}
          to="/contact"
          fontFamily="Montserrat"
          letterSpacing="2px"
        >
          Contact
        </Text>
      </Box>
    </>
  );
}

export default NavBar;
