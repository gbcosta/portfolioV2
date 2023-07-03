import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Header = (): JSX.Element => {
  const iconsStyle = {
    fontSize: 25,
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
        size={{ lg: "3xl", base: "2xl" }}
        sx={{
          fontWeight: 900,
          bgGradient: "linear(to-r, #9cf1ea, #f39cf3)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Gabriel Santos
      </Heading>
      <Text sx={{ color: "white", fontWeight: 800, mt: "4", fontsize: "8" }}>
        Full Stack Developer & Game Developer
      </Text>
      <Text color={"white"} sx={{ mt: "4" }}>
        I build apps APIs and games
      </Text>
      <Flex sx={{ mt: 12, gap: 2 }}>
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
