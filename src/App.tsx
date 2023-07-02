import Header from "./components/header/header";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import CardItem from "./components/cardItem/cardItem";
import PurpleOcreanImage from "./assets/images/PurpleOceanImage.jpeg";
function App() {
  return (
    <Flex className="Container" flexDir={"row"} padding={16} height={"100vh"}>
      <Header />
      <Flex sx={{ flexDir: "column" }}>
        <Flex sx={{ flexDir: "column" }}></Flex>
        <CardItem img={PurpleOcreanImage} header="Purple Ocean Theme">
          I decided create a theme for me, there are a lot of theme in the
          vscode marketplace, but none of them i really liked
        </CardItem>
        <Flex sx={{ flexDir: "column" }}></Flex>
      </Flex>
    </Flex>
  );
}

export default App;
