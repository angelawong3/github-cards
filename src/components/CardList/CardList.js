import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const testData = [
  {
    name: "Anya Forger",
    avatar_url:
      "https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg",
    company: "Spy x Family",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardList = (props) => {
  return (
    <div>
      {testData.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
};

export default CardList;
