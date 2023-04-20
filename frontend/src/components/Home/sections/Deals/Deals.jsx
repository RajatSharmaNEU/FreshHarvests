import React from "react";
import Images from "../../Images";
import Circle from "../../Circle";
import Triangle from "../../Triangle";
import TextContent from "../../TextContent";
import { Fade } from "react-awesome-reveal";
//import dealsImage from "../../../../images/dealsImage.jpg"
import dealsImage from "../../../../images/Discounts.png"
import './Deals.scss';

const Deals = () => {
  return (
    <section className="feature_section home_section3" id="deals">
      <Circle num="34" />
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 order-md-2 my-auto">
            <Fade right>
              <TextContent
                title='We are thrilled to offer you amazing deals on a wide range of fresh produce.'
                desc="Limited Time Offer"
              ></TextContent>
            </Fade>
          </div>
          <div className="col-md-5 order-md-1 wow fadeInUp">
            <div className="svg5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="420.865"
                height="420.865"
                viewBox="0 0 420.865 420.865"
              >
                <defs></defs>
                <g
                  className="el1"
                  transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 103.212)"
                >
                  <circle className="cc" cx="167" cy="167" r="117.5"></circle>
                </g>
              </svg>
            </div>
            <div className="app_img">
              <Images
                src={dealsImage}
                classes="feature_model"
              />
            </div>
            <div className="svg6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="475.762"
                height="438.127"
                viewBox="0 0 475.762 438.127"
              >
                <defs></defs>
                <path
                  className="abcd"
                  d="M160.377,48.181a41,41,0,0,1,67.245,0L343.015,213.537c18.967,27.179-.48,64.463-33.623,64.463H78.608c-33.143,0-52.589-37.284-33.623-64.463Z"
                  transform="translate(143.181) rotate(31)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Deals;