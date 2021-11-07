import React from "react";
import GrayImg from "../../shared/grayimg";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  const names = ["a", "b", "c", "f", "g"];

  let title;
  if (props.title_italic) {
    title = (
      <h4>
        <i>{props.name}</i>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }

  return (
    <div onClick={() => props.showMessage(props.name)}>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} bordered={props.bordered} />
      <ul>
        {names.map((n) => (
          <li>Satelite {n}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planet;
