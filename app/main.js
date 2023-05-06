"use client";

import NavBar from "../components/navbar";
import { Container, Box } from "@chakra-ui/react";

export default function Main({ children }) {
    return (
        <Box as={"main"} pb={8}>
            <NavBar />
            <Container w={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    );
}
