import React from "react";
import {ChakraProvider, extendBaseTheme} from "@chakra-ui/react";
import MainSection from "./sections/MainSection/MainSection";
import Connect from "./sections/Connect/Connect";
import Deals from "./sections/Deals/Deals";
import Feature from "./sections/Feature/Feature";
import Events from "./sections/Events/Events";
import Careers from "./sections/Careers/Careers";

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
                    <Connect />
                    <Deals />
                    <Feature/>
                    <Events/>
                    <Careers/>
                </section>
            </ChakraProvider>
        </>
    );
};

export default Home;
