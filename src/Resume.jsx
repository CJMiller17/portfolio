import { Box, Button, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";

const Resume = () => {
  return (
    <>
      <Box m="1rem" display="flex" justifyContent="center">
        <ChakraLink href="src/assets/Resume_Web_Developer.pdf" download>
          <Button
            leftIcon={<FaDownload />}
            fontFamily="Montserrat"
            fontSize="1.1rem"
            bgGradient="linear(to bottom, #FFB703, #FB8500)"
            _hover={{
              transform: "scale(1.03)",
            }}
            _active={{
              color: "#FFB703",
            }}
            padding="1.5rem"
            color="#023047"
            border="15px solid"
            borderColor="#023047"
          >
            Download Résumé
          </Button>
        </ChakraLink>
      </Box>
      <Box textAlign="center" mb="2rem" display="flex" justifyContent="center">
        <iframe
          src="https://drive.google.com/file/d/12RqOeP08W1iBUN1XUzhxa_7x5uSCILA_/preview"
          width="800rem"
          height="600rem"
          style={{
            border: "20px solid",
            borderColor: "#023047",
            borderRadius: "10px",
          }}
        ></iframe>
      </Box>
    </>
  );
};

export default Resume;
