import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(MoonIcon, SunIcon);
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    icon={<Icon />}
                    onClick={toggleColorMode}
                    colorScheme={useColorModeValue("purple", "orange")}
                />
            </motion.div>
        </AnimatePresence>
    );
}
