import Header from "./components/header/header";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import CardItemContainer from "./components/cardItemContainer/cardItemContainer.tsx";

function App() {
  return (
    <Flex
      className="Container"
      height={"100vh"}
      sx={{
        marginX: { "2xl": 250, xl: 100, lg: 50, md: 25, sm: 10, base: 5 },
        marginY: 100,
        height: "100hs",
        flexDir: { md: "row", base: "column" },
      }}
    >
      <Header />
      <CardItemContainer />
    </Flex>
  );
}

export default App;
