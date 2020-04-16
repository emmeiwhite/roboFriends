import React, { Component } from "react";
import CardList from "./../components/CardList";
import SearchRobos from "./../components/SearchRobos";
import RectLoader from "./../svg/Loader";
import Scroll from "./../components/Scroll";
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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <div style={{ textAlign: "center" }}>
        <RectLoader />
      </div>
    ) : (
      <div className="App">
        <h2 style={h2Style}>Robo Friends</h2>
        <SearchRobos handleChange={this.handleSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
