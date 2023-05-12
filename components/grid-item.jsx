import { Link } from "@chakra-ui/next-js";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w={"full"} aligh="center">
        <LinkBox cursor={"pointer"}>
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumnail"
                loading="lazy"
                placeholder="blur"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}></Text>
        </LinkBox>
    </Box>
);

export const WordGridItem = ({ children, id, title }) => (
    <Box w={"full"} align="center">
        <Link href={"/works/${id}"}>
            <LinkBox></LinkBox>
        </Link>
    </Box>
);
