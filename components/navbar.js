import Logo from "./logo";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
    Container,
    Box,
    Link,
    Stack,
    Flex,
    Heading,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    MenuIcon,
    useColorModeValue,
} from "@chakra-ui/react";
import { HumburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, children }) => {
    const path = usePathname();
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900");
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? "glassTeal" : undefined}
                color={active ? "#202023" : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    );
};

const NavBar = () => {
    return (
        <Box
            position={"fixed"}
            as="nav"
            w={"100%"}
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
        >
            <Flex align={"center"} mr={5}>
                <Heading as={"h1"} size={"lg"} letterSpacing={"tight"}>
                    <Logo />
                </Heading>
            </Flex>
        </Box>
    );
};

export default NavBar;
