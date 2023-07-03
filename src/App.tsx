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
        marginX: { "2xl": 250, xl: 100, lg: 75, md: 50, sm: 25 },
        marginY: 100,
        height: "100hs",
      }}
    >
      <Header />
      <CardItemContainer />
    </Flex>
  );
}

export default App;
