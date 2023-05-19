"use client";

import Footer from "@/components/footer";
import NavBar from "../components/navbar";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    hidden: { y: 20, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    hidden: { y: 20, opacity: 0 },
};

export default function Template({ children }) {
    return (
        <Box as={"main"} pb={8} bg={useColorModeValue("#f0e7db", "#202023")}>
            <NavBar />
            <AnimatePresence mode="wait">
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.4, type: "eseInOut" }}
                >
                    <Container maxW={"container.sm"} pt={20}>
                        {children}
                    </Container>
                </motion.div>
            </AnimatePresence>
            <Footer />
        </Box>
    );
}
