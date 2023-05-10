"use client";

import NavBar from "../components/navbar";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";

export default function Template({ children }) {
    return (
        <Box as={"main"} pb={8} bg={useColorModeValue("#f0e7db", "#202023")}>
            <NavBar />
            <Container maxW={"container.sm"} pt={14}>
                {children}
            </Container>
        </Box>
    );
}
