import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ModeToggle() {
  // Hook to toggle dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="app">
      <Button
        onClick={toggleColorMode}
        m={1}
        leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      >
        {colorMode === "light" ? "Dark" : "Colorful"}
      </Button>
    </div>
  );
}

export default ModeToggle;
