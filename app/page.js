"use client";

import {
    Box,
    Container,
    Heading,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

export default function Page() {
    return (
        <>
            <Head>
                <title>Tran Thien Khanh - Home Page </title>
            </Head>
            <Container>
                <Box
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    borderRadius={"lg"}
                    mb={6}
                    p={3}
                    textAlign={"center"}
                >
                    Hello, I&apos;m web developer in Viet Nam!
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading>Tran Thien Khanh</Heading>
                        <p>Deverloper</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            boxSize={"100px"}
                            src={"/images/avatar.png"}
                            rounded={"full"}
                            borderColor={"whiteAlpha.800"}
                            borderStyle={"solid"}
                            borderWidth={2}
                            alt="Profile Image"
                            transform={"scaleX(-1)"}
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as={"h3"} variant={"section-title"}>
                        Work
                    </Heading>
                    <Paragraph>
                        I&apos;am a web developer lived in Ho Chi Minh with a
                        passion for building digital services/stuff. I have a
                        knack for all things launching products, from planning
                        and designing all the way to solving real-life problems
                        with code.
                    </Paragraph>
                </Section>
            </Container>
        </>
    );
}
