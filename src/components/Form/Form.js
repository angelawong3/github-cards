import React from "react";

class Form extends React.Component {
  usernameInput = React.createRef();
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.usernameInput.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          ref={this.usernameInput}
          required
        />
        <button>Add Profile Card</button>
      </form>
    );
  }
}

export default Form;
