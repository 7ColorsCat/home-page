"use client";

import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box
            bg={useColorModeValue("gray.200", "whiteAlpha.900")}
            borderRadius={"lg"}
        >
            <Text p={4}>Hi, I&apos;m web developer in Viet Nam!</Text>
        </Box>
    );
}
