import Header from "./components/header/header";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import Projects from "./components/projects/projects";

function App() {
  return (
    <Flex
      className="Container"
      height={"100vh"}
      sx={{
        marginX: { "2xl": 125, xl: 100, lg: 50, md: 25, sm: 10, base: 5 },
        mt: 100,
        mb: 25,
        height: "100hs",
        flexDir: { md: "row", base: "column" },
      }}
    >
      <Header />
      <Projects />
    </Flex>
  );
}

export default App;
