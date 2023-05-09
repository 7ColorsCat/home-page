"use client";

import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box
            bg={useColorModeValue("whiteAlpha.900", "gray.800")}
            borderRadius={"lg"}
            mt={"20"}
        >
            <Text p={4} textAlign={"center"}>
                Hi, I&apos;m web developer in Viet Nam!
            </Text>
        </Box>
    );
}
