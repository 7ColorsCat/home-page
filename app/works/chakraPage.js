"use client";

import { GridItemStyle, WorkGridItem } from "@/components/grid-item";
import Section from "@/components/section";
import { Box, Container, Heading, LinkBox, SimpleGrid } from "@chakra-ui/react";
import thumnailWeaterApp from "../../public/images/weather-app.jpg";

export default function ChakraWork() {
    return (
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Works
            </Heading>
            <GridItemStyle />
            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        title={"Weather app"}
                        thumbnail={thumnailWeaterApp}
                        id={"weather-app"}
                    >
                        A simple app to find what is your current weather in
                        your location or anywhere.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    );
}
