import {
  HStack,
  VStack,
  StackDivider,
  Box,
  Text,
  Heading,
  Link,
  useColorMode,
  Image,
  Container,
} from '@chakra-ui/react';
import TypeAnimation from 'react-type-animation';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ModeToggle from './ModeToggle';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import SocialIcon from './SocialIcon';

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid white;
  margin: auto;
`;

const IconImage = styled.img`
  height: 40px;
  display: flex;
`;

const Feature = ({
  title,
  desc,
  bgColor,
  img,
  href,
  basic,
  django,
  react,
  node,
  express,
  mongodb,
  postgres,
  typescript,
  bootstrap,
  nextjs,
  prisma,
  ...rest
}) => {
  return (
    <Box
      maxW="md"
      bgGradient={bgColor}
      shadow="md"
      flex="1"
      borderRadius="xl"
      overflow="hidden"
      fontFamily="cursive"
    >
      <Link isExternal href={href}>
        <Image src={img} alt="Project Image" />
        <Heading pt={3} pb={1} fontSize="xl" fontFamily="cursive">
          {title}
        </Heading>
        <Text fontWeight="light" mt={0} pb={1}>
          {desc}
        </Text>
      </Link>
      <HStack
        p={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconImage src={basic} />
        <IconImage src={react} />
        <IconImage src={node} />
        <IconImage src={django} />
        {/* <IconImage src={express} /> */}
        <IconImage src={mongodb} />
        <IconImage src={bootstrap} />
        <IconImage src={postgres} />
        <IconImage src={typescript} />
        <IconImage src={nextjs} />
        <IconImage src={prisma} />
      </HStack>
    </Box>
  );
};

export const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {/* <Flex
        as="header"
        position="fixed"
        backgroundColor="#c6e2e4"
        w="100%"
        h="40px"
      ></Flex> */}

      <Container>
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <VStack
              divider={<StackDivider borderColor="gray.20" />}
              spacing={5}
              align="stretch"
            >
              <ProfileImage src="/images/me.jpg" />
              <Text fontSize="x-large">
                Hello! Call me Yiqian or Kenji
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    'I am a Software Developer',
                    2000,
                    'Often an UI Designer',
                    2000,
                    'Occasionally a 3D Artist',
                    2000,
                  ]}
                  repeat={Infinity}
                  wrapper="h2"
                />
              </Text>

              <HStack>
                <SocialIcon />
              </HStack>
              <ModeToggle />
              <h1>
                Scroll Down More <ArrowDownIcon />
              </h1>
            </VStack>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <VStack
              divider={<StackDivider borderColor="gray.20" />}
              spacing={5}
              align="stretch"
            >
              <Text fontSize="x-large" fontFamily="cursive">
                My Projects
              </Text>
              <HStack spacing={10}>
                <Feature
                  react="/logo/react.png"
                  href="https://nextmedia-gohyiqian.vercel.app/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300, #b068ac)'
                  }
                  img="/images/nextmedia.jpg"
                  title="NextMedia"
                  desc="Landing Page for AR consultancy company"
                />
                <Feature
                  node="/logo/node.png"
                  express="/logo/express.png"
                  mongodb="/logo/mongodb.png"
                  bootstrap="logo/bootstrap.png"
                  href="https://diylifestyle.up.railway.app/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300, orange.200)'
                  }
                  img="/images/diylifestyle.jpg"
                  title="DiyLifeStyle"
                  desc="Meal-planning app to improve your lifestyle."
                />
              </HStack>
              <HStack spacing={10}>
                <Feature
                  react="/logo/react.png"
                  django="/logo/django.png"
                  postgres="/logo/postgres.png"
                  bootstrap="logo/bootstrap.png"
                  href="https://mygaragesale.herokuapp.com/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300, salmon)'
                  }
                  img="/images/garagesale.jpg"
                  title="GarageSale"
                  desc="Marketplace for sellers & buyers"
                />
                <Feature
                  nextjs="/logo/next.png"
                  prisma="/logo/prisma.svg"
                  mongodb="/logo/mongodb.png"
                  href="https://www.gohyiqian.com/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300, #6b4242)'
                  }
                  img="/images/blog.jpg"
                  title="My Tech Blog (Beta)"
                  desc="Starting my own personal blog on Tech"
                />
              </HStack>
              <HStack spacing={10}>
                <Feature
                  react="/logo/react.png"
                  typescript="/logo/typescript.png"
                  href="https://react-typescript-quiz-inky.vercel.app/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300,green.200)'
                  }
                  img="/images/quiz.jpg"
                  title="ReactTypescriptQuiz"
                  desc="Do the quiz test your knowledge!"
                />
                <Feature
                  react="/logo/react.png"
                  node="/logo/node.png"
                  express="/logo/express.png"
                  mongodb="/logo/mongodb.png"
                  bootstrap="logo/bootstrap.png"
                  href="https://github.com/onggq37/crypto_trader"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300,linkedin.300)'
                  }
                  img="/images/cryptotrader.jpg"
                  title="CryptoTrader"
                  desc="Crypto-trading app with CoinGecko API"
                />
              </HStack>
              <HStack spacing={10}>
                <Feature
                  basic="/logo/basic.png"
                  bootstrap="logo/bootstrap.png"
                  href="https://github.com/gohyiqian/MyPokedex"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300,orange.200)'
                  }
                  img="/images/pokedex.jpg"
                  title="PokeDex"
                  desc="Gotta catch 'em all. Pokemon!"
                />
                <Feature
                  basic="/logo/basic.png"
                  bootstrap="logo/bootstrap.png"
                  href="https://gohyiqian.github.io/fastest-fingers-game/"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.800)'
                      : 'linear(gray.300,purple.300)'
                  }
                  title="FastestFingers"
                  img="/images/fastestfinger.jpg"
                  desc="Practice your coding speed!"
                />
              </HStack>
              <ModeToggle />
              <h1>
                Scroll Down More <ArrowDownIcon />
              </h1>
            </VStack>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={2.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: `${
                colorMode === 'dark' ? '#404A6B' : '#c6e2e4'
              }`,
            }}
          >
            <VStack
              divider={<StackDivider borderColor="gray.20" />}
              spacing={3}
              align="stretch"
            >
              <HStack spacing={10}>
                <Feature
                  href="/CV2023_GohYiQian.pdf"
                  download
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.700)'
                      : 'linear(gray.300, white)'
                  }
                  title="Resume 2023"
                  desc="Click to download"
                  img="/images/resume_2023.jpg"
                />
                <Feature
                  href="/yiqian_resume.pdf"
                  download
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.700)'
                      : 'linear(gray.300, white)'
                  }
                  title="Resume 2022"
                  desc="Click to download"
                  img="/images/resume_2022.jpg"
                />
                <Feature
                  href="mailto: kenji.gohyiqian@gmail.com"
                  bgColor={
                    colorMode === 'dark'
                      ? 'linear(gray.300,gray.700)'
                      : 'linear(gray.300, white)'
                  }
                  title="Contact Me"
                  desc="Click to Contact"
                  img="/images/email.jpg"
                />
              </HStack>
              <ModeToggle />
              <h1>
                Scroll Back Up <ArrowUpIcon />
              </h1>
            </VStack>
          </ParallaxLayer>
        </Parallax>
      </Container>
    </>
  );
};
