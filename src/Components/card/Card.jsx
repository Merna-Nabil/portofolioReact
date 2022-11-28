import React from "react";
import "./card.scss";
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="cardd">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
