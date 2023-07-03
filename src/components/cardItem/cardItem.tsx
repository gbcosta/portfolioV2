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
        pl: 4,
        pr: 4,
        fontSize: { base: "md", "2xl": "xl" },
      }}
    >
      {props.children}
    </Box>
  );
};

const CardSx = {
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
    shadow: "0px 0px 20px 1px rgba(0,0,0,0.3)",
  },
  padding: 4,
};

const CardItem = (props: {
  img: string;
  techsInfo?: Array<string>;
  header: string;
  children: string;
  link: string;
}): JSX.Element => {
  return (
    <Card
      role="group"
      sx={CardSx}
      onClick={() => {
        window.open(props.link);
      }}
    >
      <Image
        src={props.img}
        sx={{
          maxW: { sm: 1920 / 16, base: 0 },
          maxHeight: 1080 / 16,
          visibility: { sm: "visible", base: "hidden" },
        }}
      />
      <Flex sx={{ flexDir: "column", ml: 6 }}>
        <CardHeader
          sx={{
            padding: 0,
            lineHeight: "none",
            flexDir: "row",
            display: "flex",
            gap: 2,
            fontSize: { base: "md", "2xl": "xl" },
            fontWeight: 700,
          }}
        >
          {props.header}
          <Box
            sx={{
              _groupHover: { transform: "translate(10%, -10%)" },
              transition: "transform 0.1s",
            }}
          >
            <HiOutlineExternalLink />
          </Box>
        </CardHeader>
        <CardBody
          sx={{
            padding: 0,
            color: "gray",
            mt: 2,
            fontSize: { base: "sm", "2xl": "lg" },
          }}
        >
          {props.children}
        </CardBody>
        <CardFooter sx={{ padding: 0, gap: 2, flexWrap: "wrap" }}>
          {props.techsInfo?.map((value, index) => {
            return <TechInfo key={index}>{value}</TechInfo>;
          })}
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default CardItem;
