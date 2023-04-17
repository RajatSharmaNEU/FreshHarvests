import React from "react";
import { TypeAnimation } from 'react-type-animation';

import Images from "../../Images";
import Circle from "../../Circle";
import Triangle from "../../Triangle";
import Google from "../../Google";
import Header from "../Header/Header";
import mainSectionImage from "../../../../images/mainSection2.jpg"
import './MainSection.scss';

const MainSection = () => {
    const propsObj = {
        "navLinks": [
            {
                "name": "Connect",
                "url": "#connect"
            },
            {
                "name": "Deals",
                "url": "#deals"
            },
            {
                "name": "Features",
                "url": "#features"
            },
            {
                "name": "Events",
                "url": "#events"
            },
            {
                "name": "Competitions",
                "url": "#competitions"
            },
            {
                "name": "Download",
                "url": "#download"
            },
            {
                "name": "Login",
                "url": "#login"
            }
        ],
        "tertiary_color": "var(--tertiary_color)"
    }
    return (
        <div>
            <Header {...propsObj} />
            <div className="hero style-curve grdnt-blue parallaxie overly">
                <section className="home_section1">
                    <div className="custom_container home_screen_section">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left">
                                <div className="app_img">
                                    <Circle num="254"/>
                                    <Circle num="24"/>
                                    <Circle num="56"/>
                                    <Images src={mainSectionImage} classes="feature_model"/>
                                    <div className="svg1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="451.571"
                                            height="393.768"
                                            viewBox="0 0 451.571 393.768"
                                        >
                                            <defs></defs>
                                            <path
                                                className="aa path"
                                                d="M9652.548,854.245c-44.753,49.775,65.263,217.439,275.973,165.917s205.659-443.337,68.061-376.371S9697.3,804.47,9652.548,854.245Z"
                                                transform="translate(-9642.672 -636.116)"
                                            ></path>
                                        </svg>
                                    </div>
                                    <Circle num="46"/>
                                    <Circle num="56"/>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-right py-4">
                                <h1 className="main_title">Delivering Freshness to Your Doorstep!</h1>
                                <h5 style={{
                                    fontFamily: '"open sans", sans-serif',
                                    fontWeight: 400
                                }} className="tertiary-color">Your One-Stop Shop for Farm-Fresh Produce and More</h5>
                                <div className="about_app animated">
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay=".7s"
                                        style={{
                                            animationName: "fadeInUp",
                                            animationDelay: "0.7s",
                                        }}
                                    >
                                        <h4 className="metropolis_regular font_30">
                                            <TypeAnimation
                                                sequence={[
                                                    'Welcome to', // Types 'One'
                                                    1000, // Waits 1s
                                                    'Fresh Harvest', // Deletes 'One' and types 'Two'
                                                    2000, // Waits 2s
                                                ]}
                                                cursor={true}
                                                repeat={Infinity}
                                            />
                                        </h4>
                                    </div>
                                    <div
                                        className="wow fadeInUp download"
                                        data-wow-delay=".7s"
                                        style={{
                                            animationName: "fadeInUp",
                                            animationDelay: "0.7s",
                                        }}
                                    >
                                        <Google/>
                                        <h5
                                            className="metropolis_semibold font_small wow fadeInUp"
                                            data-wow-delay=".3s"
                                            style={{
                                                animationDelay: "0.5s",
                                                animationName: "fadeInUp",
                                            }}
                                        >
                                            Download App Now
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Circle num="22"/>
                    {/* <Triangle /> */}
                </section>
            </div>
            <div style={{marginTop: "100px"}}/>
            <div style={{position: "relative"}}><Triangle/></div>
        </div>
    );
};

export default MainSection;