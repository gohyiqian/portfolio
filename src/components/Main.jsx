import {
  HStack,
  VStack,
  StackDivider,
  Box,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import TypeAnimation from "react-type-animation";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid skyblue;
  margin: auto;
`;

const Image = styled.img`
  min-height: 100px;
  max-height: 160px;
  border-radius: 2px;
  border: 2px solid white;
  margin: auto;
  &:hover {
    border: 5px solid white;
    cursor: pointer;
  }
`;

const Feature = ({ title, desc, bgColor, img, href, ...rest }) => {
  return (
    <Box
      p={10}
      maxW="md"
      bgGradient={bgColor}
      shadow="md"
      borderWidth="2px"
      flex="1"
      borderRadius="xl"
      overflow="hidden"
      fontFamily="cursive"
    >
      <Link isExternal href={href}>
        <Heading fontSize="xl" fontFamily="cursive">
          {title}
        </Heading>
      </Link>
      <Text mt={5} p={3}>
        {desc}
      </Text>
      <Link isExternal href={href}>
        <Image src={img} />
      </Link>
    </Box>
  );
};

export const Main = () => {
  return (
    <>
      {/* <Flex
        as="header"
        position="fixed"
        backgroundColor="#c6e2e4"
        w="100%"
        h="40px"
      ></Flex> */}
      <div>
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0.3}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VStack
              divider={<StackDivider borderColor="gray.20" />}
              spacing={5}
              align="stretch"
            >
              <ProfileImage src="/images/me.jpg" />
              <Text fontSize="x-large">
                My name is Kenji
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "I am a Software Developer.",
                    2000,
                    "Also a Designer",
                    2000,
                  ]}
                  wrapper="h1"
                  repeat={Infinity}
                />
              </Text>

              <Text fontSize="x-large" fontFamily="cursive">
                My Projects
              </Text>

              <HStack spacing={10}>
                <Feature
                  href="https://mygaragesale.herokuapp.com/"
                  bgColor="linear(salmon,gray.300)"
                  img="/images/garagesale.jpg"
                  title="GarageSale"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />
                <Feature
                  href="https://diylifestyle.herokuapp.com/"
                  bgColor="linear(orange.200,gray.300)"
                  img="/images/diylifestyle.jpg"
                  title="DiyLifeStyle"
                  desc="A meal-planning app that aspires to let user take charge of their lifestyle."
                />
              </HStack>
              <HStack spacing={10}>
                <Feature
                  href="https://mycryptotrader.herokuapp.com/"
                  bgColor="linear(green.200,gray.300)"
                  title="DiyLifeStyle"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />
                <Feature
                  bgColor="linear(linkedin.300,gray.300)"
                  title="CryptoTrader"
                  desc="The future can be even brighter but a goal without a plan is just a wish"
                />
              </HStack>
            </VStack>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#c6e2e4",
            }}
          >
            <VStack
              divider={<StackDivider borderColor="gray.20" />}
              spacing={0}
              align="stretch"
            >
              <HStack spacing={10}>
                <Feature
                  bgColor="linear(white,gray.200)"
                  title="Contact Me"
                  desc="kenji.gohyiqian@gmail.com"
                  img="/images/me.jpg"
                />
                <Feature
                  bgColor="linear(white,gray.200)"
                  title="My Resume"
                  desc="kenji.gohyiqian@gmail.com"
                />
                <Feature
                  bgColor="linear(white,gray.200)"
                  title="My Resume"
                  desc="kenji.gohyiqian@gmail.com"
                />
              </HStack>
            </VStack>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};
