import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";

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

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = { profiles: testData };

  render() {
    return (
      <>
        <div className="App">
          <header className="header">GitHub Cards</header>
        </div>
        <Form />
        <CardList profile={this.state.profiles} />
      </>
    );
  }
}

export default App;
