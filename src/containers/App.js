import React, { Component } from "react";
import CardList from "./../components/CardList";
import SearchRobos from "./../components/SearchRobos";
import RectLoader from "./../svg/Loader";
import Scroll from "./../components/Scroll";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import { connect } from 'react-redux';
import { setSearchField } from './../action';



const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange: (event) => { dispatch(setSearchField(event.target.value)) }
  }
}

const h2Style = {
  fontFamily: "agency fb",
  fontSize: "2.5rem",
  marginBottom: "1rem",
  color: "red",
  textShadow: "2px 4px 3px #00fff2",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
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


  render() {
    // Bug fixing of filtered Robots
    const { robots } = this.state;
    const { searchField, handleSearchChange } = this.props;
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
          <SearchRobos handleChange={handleSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
            {" "}
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
