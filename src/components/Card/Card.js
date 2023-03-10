import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="profile-pic" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.bio}</div>
        </div>
      </div>
    );
  }
}

export default Card;
