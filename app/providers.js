"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";

const nextFont = M_PLUS_Rounded_1c({
    weight: ["400"],
    subsets: ["latin"],
});

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
            textUnderlineOffset: 3,
        }),
    },
};

const fonts = {
    heading: nextFont.style.fontFamily,
};

const colors = {
    grassTeal: "#88ccca",
    lavender: "#751264",
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const theme = extendTheme({ components, fonts, colors, config });

export default function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
