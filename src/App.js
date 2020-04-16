import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchRobos from "./SearchRobos";
import "./App.css";

const h2Style = {
  fontFamily: "agency fb",
  fontSize: "2.5rem",
  marginBottom: "1rem",
};

const handleSearchChange = (e) => {
  console.log(e.target.value);
};

const App = () => {
  return (
    <div className="App">
      <h2 style={h2Style}>Robo Friends</h2>
      <SearchRobos handleChange={handleSearchChange} />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
