"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { M_PLUS_Rounded_1c } from "next/font/google";
const nextFont = M_PLUS_Rounded_1c({
    weight: ["400"],
    subsets: ["latin"],
});

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props),
        },
    }),
};
const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Link: {
        baseStyle: (props) => ({
            color: mode("#3d7aed", "#ff63c3")(props),
            textUnderlineOffset: 3,
        }),
    },
};

const fonts = {
    heading: nextFont.style.fontFamily,
};

const colors = {
    grassTeal: "#88ccca",
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};
const theme = extendTheme({ styles, components, fonts, colors, config });

export default function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
