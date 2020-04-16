import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchRobos from "./SearchRobos";
import "./App.css";

const h2Style = {
  fontFamily: "agency fb",
  fontSize: "2.5rem",
  marginBottom: "1rem",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
    };
  }

  handleSearchChange = (e) => {
    let value = e.target.value;
    let robots = [...this.state.robots];

    robots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(value.toLowerCase());
    });

    this.setState({
      robots,
    });
  };

  render() {
    return (
      <div className="App">
        <h2 style={h2Style}>Robo Friends</h2>
        <SearchRobos handleChange={this.handleSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
