import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div>
      {props.profile.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
};

export default CardList;
