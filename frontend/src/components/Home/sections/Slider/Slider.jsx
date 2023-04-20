import React from "react";
import Slider from "react-slick";
import Images from "../../Images";
import connectImage1 from "../../../../images/newImages/Image1.png";
import connectImage2 from "../../../../images/newImages/Image9.png";
import connectImage3 from "../../../../images/newImages/Image3.png";
import connectImage4 from "../../../../images/newImages/Image4.png";
import connectImage5 from "../../../../images/newImages/Image5.png";
import connectImage6 from "../../../../images/newImages/Image6.png";
import connectImage7 from "../../../../images/newImages/Image8.png";
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
                <Images src={connectImage1} classes="feature_model"/>
                <Images src={connectImage2} classes="feature_model"/>
                <Images src={connectImage3} classes="feature_model"/>
                <Images src={connectImage4} classes="feature_model"/>
                <Images src={connectImage7} classes="feature_model"/>
                <Images src={connectImage5} classes="feature_model"/>
                <Images src={connectImage6} classes="feature_model"/>
            </Slider>
        </section>
    );
};
export default Sliders;
