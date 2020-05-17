import React, { Component } from "react";
import CardList from "./../components/CardList";
import SearchRobos from "./../components/SearchRobos";
import RectLoader from "./../svg/Loader";
import Scroll from "./../components/Scroll";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './../action';



const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChange: (event) => { dispatch(setSearchField(event.target.value)) },
    onRequestRobots: () => dispatch(requestRobots()) // Thunk works on returned function 
  }
};

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
    this.props.onRequestRobots(); // In async call, we make a call to our action creator
  }


  render() {
    // Bug fixing of filtered Robots
    const { searchField, handleSearchChange, robots, isPending } = this.props;

    console.log(`${robots}`);
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
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
