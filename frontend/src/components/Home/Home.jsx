import React from "react";
import {ChakraProvider, extendBaseTheme} from "@chakra-ui/react";
import MainSection from "./sections/MainSection/MainSection";

const Home = () => {

    const theme = extendBaseTheme({
        fonts: {
            body: "Josefin Sans",
        },
    });

    return (
        <>
            <ChakraProvider theme={theme}>
                <section className="main_sec home_page">
                    <MainSection/>
                </section>
            </ChakraProvider>
        </>
    );
};

export default Home;
