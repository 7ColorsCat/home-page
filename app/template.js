"use client";

import NavBar from "../components/navbar";
import { Container, Box } from "@chakra-ui/react";

export default function Template({ children }) {
    return (
        <Box as={"main"} pb={8}>
            <NavBar />
            <Container maxW={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    );
}
