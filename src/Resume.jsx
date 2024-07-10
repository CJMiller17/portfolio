import { Box, Button, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";

const Resume = () => {
  return (
    <>
      <Box m="1rem" display="flex" justifyContent="center">
        <ChakraLink href="src/assets/Resume.pdf" download>
          <Button
            leftIcon={<FaDownload />}
            fontFamily="Montserrat Alternates"
            color="rgba(24, 25, 26, 0.8)"
            fontSize="1rem"
            bgGradient="linear(to bottom, #FFF455, #FFC700, #EE4E4E)"
            _hover={{
              bgGradient: "linear(to bottom, #FFC700, #EE4E4E)",
            }}
          >
            Download Résumé
          </Button>
        </ChakraLink>
      </Box>
      <Box textAlign="center" mb="2rem" display="flex" justifyContent="center">
        <iframe
          src="https://drive.google.com/file/d/11MG0DFHX_Xmw-Prt1eCdX9-6NrV0ToqQ/preview"
          width="800rem"
          height="600rem"
          style={{ border: "none" }}
          // allow="autoplay"
        ></iframe>
      </Box>
    </>
  );
};

export default Resume;
