import React from "react";
import "./Card.css";

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

class Card extends React.Component {
  render() {
    const profile = testData[0];

    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="profile-pic" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
