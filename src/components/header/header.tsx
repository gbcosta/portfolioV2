import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Header = (): JSX.Element => {
  const iconsStyle = {
    cursor: "pointer",
    fill: "white",
  };

  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        flexDir: "column",
        width: "100%",
        position: { md: "sticky", base: "relative" },
        top: { md: 100, base: 0 },
        alignSelf: "flex-start",
        display: "flex",
        alignItems: { md: "flex-start", base: "center" },
      }}
    >
      <Heading
        size={{ "2xl": "4xl", lg: "3xl", base: "2xl" }}
        sx={{
          fontWeight: 900,
          bgGradient: "linear(to-r, #9cf1ea, #f39cf3)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Gabriel Santos
      </Heading>
      <Text
        sx={{
          color: "white",
          fontWeight: 800,
          mt: "4",
          fontSize: { "2xl": "2xl", lg: "xl", base: "lg" },
        }}
      >
        Full Stack Developer & Game Developer
      </Text>
      <Text
        color={"white"}
        sx={{ mt: "4", fontSize: { "2xl": "xl", lg: "md", base: "sm" } }}
      >
        I build apps APIs and games
      </Text>
      <Flex sx={{ mt: 12, gap: 2, fontSize: { "2xl": 35, lg: 30, base: 25 } }}>
        <AiFillGithub
          style={iconsStyle}
          onClick={() => {
            window.open("https://github.com/gbcosta");
          }}
        />
        <AiFillLinkedin
          style={iconsStyle}
          onClick={() => {
            window.open("https://www.linkedin.com/in/gbcostasantos/");
          }}
        />
        <AiFillMail
          style={iconsStyle}
          onClick={() => {
            window.location.href =
              "mailto:gbcostasant@gmail.com?subject=&body=Gabriel%20Santos";
          }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
