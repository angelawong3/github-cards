import React from "react";
import "./Form.css";
import axios from "axios";

class Form extends React.Component {
  state = { username: "" };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    const getGitHubUser = await axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    this.props.onSubmit(getGitHubUser.data);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add Profile Card</button>
      </form>
    );
  }
}

export default Form;
