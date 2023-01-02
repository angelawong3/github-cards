import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";

// const testData = [
//   {
//     name: "Anya Forger",
//     avatar_url:
//       "https://www.themarysue.com/wp-content/uploads/2022/05/Anya-smile.jpg",
//     bio: "Spy x Family",
//   },
//   {
//     name: "Loid Forger",
//     avatar_url:
//       "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/spy-x-family-loid-smiling.jpg",
//     bio: "Spy x Family",
//   },
//   {
//     name: "Yor Forger",
//     avatar_url:
//       "https://leosigh.com/wp-content/uploads/2022/11/Yor-in-Episode-19-rushing-to-take-Anyas-gym-clothes.jpg",
//     bio: "Spy x Family",
//   },
// ];

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = { profiles: [] };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="header">GitHub Cards</header>
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profile={this.state.profiles} />
      </>
    );
  }
}

export default App;
