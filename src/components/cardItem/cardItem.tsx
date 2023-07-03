import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

const TechInfo = (props: { children?: any }): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 2,
        bgColor: "#4bc7dd40",
        color: "#51d8f0",
        rounded: "full",
        pl: 2,
        pr: 2,
        fontSize: "md",
      }}
    >
      {props.children}
    </Box>
  );
};

const CardItem = (props: {
  img: string;
  techsInfo?: Array<string>;
  header: string;
  children: string;
}): JSX.Element => {
  return (
    <Card
      role="group"
      sx={{
        bgColor: "gray",
        flexDir: "row",
        backgroundColor: "#090a1a",
        color: "white",
        margin: 0,
        boxShadow: "none",
        cursor: "pointer",
        transition: "0.3s",
        _hover: {
          bgColor: "#1d1d2ea7",
          color: "#ab5edf",
        },
        padding: 4,
      }}
    >
      <Image src={props.img} sx={{ maxW: 1920 / 16, maxHeight: 1080 / 16 }} />
      <Flex sx={{ flexDir: "column", ml: 6 }}>
        <CardHeader
          sx={{
            padding: 0,
            lineHeight: "none",
            flexDir: "row",
            display: "flex",
            gap: 2,
          }}
        >
          {props.header}
          <Box
            sx={{
              _groupHover: { transform: "translate(10%, -10%)" },
              transition: "transform 0.2s",
            }}
          >
            <HiOutlineExternalLink />
          </Box>
        </CardHeader>
        <CardBody sx={{ padding: 0, color: "gray", mt: 2 }}>
          {props.children}
        </CardBody>
        <CardFooter sx={{ padding: 0 }}>
          <TechInfo>vscode</TechInfo>
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default CardItem;
