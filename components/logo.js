import {
    Link,
    Text,
    Image,
    useColorMode,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";

export default function Logo() {
    return (
        <Link href="/">
            <Box display={"inline-flex"} alignItems={"center"}>
                <Image src="/images/logo.png" width={10} heigth={10} />
                <Text color={useColorModeValue("gray.800", "whiteAlpha.900")}>
                    Tran Thien Khanh
                </Text>
            </Box>
        </Link>
    );
}
