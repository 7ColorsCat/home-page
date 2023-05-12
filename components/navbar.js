import Logo from "./logo";
import { usePathname } from "next/navigation";
import {
    Container,
    Box,
    Stack,
    Flex,
    Heading,
    Button,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    MenuIcon,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, children, ...props }) => {
    const path = usePathname();
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    return (
        <Link
            p={2}
            bg={active ? "grassTeal" : undefined}
            href={href}
            scroll={false}
            w={{ base: "full", md: "auto" }}
            display={{ base: "block", md: "inline-block" }}
            color={active ? "#202023" : inactiveColor}
            {...props}
        >
            {children}
        </Link>
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
            <Container
                maxW={"container.md"}
                display={"flex"}
                p={"2"}
                wrap={"wrap"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Flex align={"center"} mr={5}>
                    <Heading as={"h1"} size={"md"}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    w={{ base: "full", md: "auto" }}
                    alignItems={"center"}
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works">Works</LinkItem>
                    <LinkItem href="/resume">Resume</LinkItem>
                </Stack>
                <Box>
                    <ThemeToggleButton />
                    <Box display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant={"outline"}
                                aria-label="Options"
                                ml={2}
                            />
                            <MenuList>
                                <MenuItem>
                                    <LinkItem href="/works">Works</LinkItem>
                                </MenuItem>
                                <MenuItem>
                                    <LinkItem href="/resume">Resume</LinkItem>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NavBar;
