import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <>
      <img
        className={props.bordered ? "img-bordered" : "img-normal"}
        alt="planetinha"
        src={props.img_url}
      />
    </>
  );
};

export default GrayImg;
