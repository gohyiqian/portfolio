import { Main } from "./components/Main";
import styled from "styled-components";
import { useColorMode } from "@chakra-ui/react";

const Container = styled.div`
  background: ${(props) =>
    props.color === "light"
      ? " linear-gradient(#c6e2e4, #74c9e2, #11ede1)"
      : " linear-gradient(#404A5A, #404A5A)"};
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container color={colorMode}>
      <Main />
    </Container>
  );
}

export default App;
