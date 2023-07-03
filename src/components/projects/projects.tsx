import { Flex, Heading } from "@chakra-ui/react";
import CardItem from "../cardItem/cardItem";
import PurpleOceanImage from "../../assets/images/PurpleOceanImage.jpeg";
import Portfoliov1 from "../../assets/images/portfoliov1.png";

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
        link="https://purpleocean.netlify.app/"
      >
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <CardItem
        img={Portfoliov1}
        header="Portfolio V1"
        techsInfo={["Typescript", "React", "Chakra UI"]}
        link="https://gbcostasantv1.netlify.app/"
      >
        I decided create a theme for me, there are a lot of theme in the vscode
        marketplace, but none of them i really liked
      </CardItem>
      <Flex sx={{ flexDir: "column" }}></Flex>
    </Flex>
  );
};

export default Projects;
