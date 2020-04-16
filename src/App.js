import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchRobos from "./SearchRobos";
import RectLoader from "./svg/Loader";
import "./App.css";

const h2Style = {
  fontFamily: "agency fb",
  fontSize: "2.5rem",
  marginBottom: "1rem",
  color: "#fff",
  textShadow: " 3px 4px #777",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          robots: data,
        });
      });
  }

  handleSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    // Bug fixing of filtered Robots

    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h2 style={h2Style}>Robo Friends</h2>
        <SearchRobos handleChange={this.handleSearchChange} />
        {this.state.robots.length > 0 ? (
          <CardList robots={filteredRobots} />
        ) : (
          <RectLoader />
        )}
      </div>
    );
  }
}

export default App;
