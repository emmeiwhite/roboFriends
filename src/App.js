import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchRobos from "./SearchRobos";
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
      robots: robots,
      searchField: "",
    };
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
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
