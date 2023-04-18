import React from "react";
import Slider from "react-slick";
import Images from "../../Images";
import connectImage from "../../../../images/connectImage.jpg";

const Sliders = () => {
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <section className="feature_section home_section6">
            <Slider {...settings} className="slick">
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
                <Images src={connectImage} classes="feature_model"/>
            </Slider>
        </section>
    );
};
export default Sliders;
