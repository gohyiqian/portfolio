import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Button, Center, Text, Link } from "@chakra-ui/react";

export default function SocialIcon() {
  return (
    <Center p={1}>
      <Link m={1} isExternal href="https://www.linkedin.com/in/gohyiqian/">
        <Button w={"full"} maxW={"md"} bg="messenger.400">
          <SiLinkedin />
        </Button>
      </Link>

      <Link m={1} isExternal href="https://github.com/gohyiqian">
        <Button
          m={1}
          w={"full"}
          maxW={"md"}
          bg="gray.400"
          leftIcon={<SiGithub />}
        >
          <Center>
            <Text>GitHub</Text>
          </Center>
        </Button>
      </Link>

      <Link
        m={1}
        isExternal
        href="https://www.youtube.com/channel/UCPbMuNf-SzhMZkGlpnHj8Jw"
      >
        <Button m={1} w={"full"} maxW={"md"} bg="red.400">
          <SiYoutube />
        </Button>
      </Link>

      <Link m={1} isExternal href="https://trailblazer.me/id/yqgoh">
        <Button
          m={1}
          w={"full"}
          maxW={"md"}
          bg="#05A1DF"
          leftIcon={<FaSalesforce />}
        >
          <Center>
            <Text>Salesforce</Text>
          </Center>
        </Button>
      </Link>

      <Link m={1} isExternal href="https://kenjigohyiqian.myportfolio.com/work">
        <Button
          m={1}
          w={"full"}
          maxW={"md"}
          bg="navajowhite"
          leftIcon={<CgWebsite />}
        >
          <Center>
            <Text>Other</Text>
          </Center>
        </Button>
      </Link>
    </Center>
  );
}
