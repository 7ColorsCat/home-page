import ChakraPage from "./chakraPage";

export const metadata = {
    title: "Tran Thien Khanh - Home Page",
    description: "Khanh's homepage",
    author: "Tran Thien Khanh",
};

const Page = ({ children }) => {
    return <ChakraPage>{children}</ChakraPage>;
};

export default Page;
