import { M_PLUS_Rounded_1c } from "next/font/google";
import Providers from "./providers";
import Main from "./main";

const inter = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Tran Thien Khanh",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Main>{children}</Main>
                </Providers>
            </body>
        </html>
    );
}
