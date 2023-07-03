import Header from "./components/header/header";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import CardItemContainer from "./components/cardItemContainer/cardItemContainer.tsx";

function App() {
  return (
    <Flex
      className="Container"
      padding={16}
      height={"100vh"}
      sx={{ ml: "50", mr: "50" }}
    >
      <Header />
      <CardItemContainer />
    </Flex>
  );
}

export default App;
