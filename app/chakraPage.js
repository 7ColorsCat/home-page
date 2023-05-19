"use client";

import {
    Box,
    Button,
    Container,
    Heading,
    chakra,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio";
import CatModel from "@/components/cat-model";

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) =>
        ["width", "height", "src", "alt"].includes(prop),
});

export default function ChakraPage() {
    return (
        <>
            <Container>
                <Box>
                    <CatModel />
                </Box>
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
                        <Heading as={"h2"} letterSpacing={"tight"}>
                            Tran Thien Khanh
                        </Heading>
                        <p>Deverloper</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Box
                            borderColor="lavender"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <ProfileImage
                                src={"/images/avatar.png"}
                                rounded={"full"}
                                transform={"scaleX(-1)"}
                                bgGradient={"linear(to-t, #4568dc, #b06ab3)"}
                                width="100"
                                height="100"
                                objectFit={"cover"}
                            />
                        </Box>
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
                    <Box align="center" my={4}>
                        <Link href="/works">
                            <Button
                                colorScheme="teal"
                                rightIcon={<ChevronRightIcon />}
                            >
                                My portfolio
                            </Button>
                        </Link>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as={"h3"} variant={"section-title"}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Long An, Viet Nam.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Graduated from the professional intermediate level in
                        Information Technology at Cao Thang Technical College
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Worked at Alo360.com (a strategic partnership with the
                        Arirang, which are manufactured and assembled by Amtec
                        Electronic Corporation)
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 to present</BioYear>
                        Working on APJ (Anh Phuong Jewelry) as working in APJ as
                        a programmer, and website maintenance specialist,
                        providing technological solutions for the company
                    </BioSection>
                </Section>
            </Container>
        </>
    );
}
