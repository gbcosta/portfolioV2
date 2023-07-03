import { Flex, Heading } from "@chakra-ui/react";
import CardItem from "../cardItem/cardItem";
import PurpleOceanImage from "../../assets/images/PurpleOceanImage.jpeg";

const Projects = (): JSX.Element => {
  return (
    <Flex sx={{ flexDir: "column", width: "100%", gap: 4 }}>
      <Heading
        sx={{
          textAlign: "center",
          bgGradient: "linear(to-r, #9cf1ea, #f39cf3)",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: 700,
        }}
      >
        Projects
      </Heading>
      <CardItem
        img={PurpleOceanImage}
        header="Purple Ocean Theme"
        techsInfo={["vscode"]}
      >
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem
        img={PurpleOceanImage}
        header="Purple Ocean Theme"
        techsInfo={["javascript", "typescript"]}
      >
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem img={PurpleOceanImage} header="Purple Ocean Theme">
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <Flex sx={{ flexDir: "column" }}></Flex>
    </Flex>
  );
};

export default Projects;
