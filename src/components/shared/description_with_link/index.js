import React from "react";
import "./style.css";

const DescriptionWithLink = (props) => {
  if (props.link) {
    return (
      <>
        <p>{props.description}</p>
        <p>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.link}
          </a>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          <i>{props.description}</i>
        </p>
      </>
    );
  }
};

export default DescriptionWithLink;
