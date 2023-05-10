import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(MoonIcon, SunIcon);
    return (
        <IconButton
            icon={<Icon />}
            onClick={toggleColorMode}
            colorScheme={useColorModeValue("purple", "orange")}
        />
    );
}
