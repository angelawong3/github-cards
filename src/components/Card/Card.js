import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img
          src="https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg"
          alt="profile-pic"
        />
        <div className="info">
          <div className="name">name here</div>
          <div className="company">company here</div>
        </div>
      </div>
    );
  }
}

export default Card;
