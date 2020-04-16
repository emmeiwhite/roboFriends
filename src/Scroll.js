import React from "react";

const scrollStyle = {
  height: "70vh",
  overflowY: "scroll",
};

const Scroll = ({ children }) => {
  return <div style={scrollStyle}>{children}</div>;
};

export default Scroll;
