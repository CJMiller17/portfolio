import { Heading, Button } from "@chakra-ui/react";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Heading display="flex" justifyContent="Center" alignContent="center" mt="4rem"> Click Below to Get to Know Me </Heading>
      <Button
        color="teal"
        variant="solid"
      >
        Click Me
      </Button>
    </>
  );
}

export default App;
