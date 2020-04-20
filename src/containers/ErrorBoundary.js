import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // This life cycle method introduced in React-16 acts like a try-catch block
  componentDidCatch(error, info) {
    console.log("componentDidCatch method was called");
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      console.log("It's an Error !!!");
      return <h1>Oooops. This is not good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
