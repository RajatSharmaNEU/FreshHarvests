import React from "react";
import { Fade } from "react-awesome-reveal";
const Images = ({ src, classes }) => {
  return (
    <Fade cascade className="image-container">
      <img
        className={`model wow fadeInUp ${classes}`}
        data-wow-delay=".3s"
        src={src}
        style={{
          animationName: "fadeInUp",
          animationDelay: "0.3s",
        }}
        alt="mobile"
      />
    </Fade>
  );
};

export default Images;