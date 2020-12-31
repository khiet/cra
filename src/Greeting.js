import React, { Component } from 'react';

class Greeting extends Component {
  componentDidMount() {
    console.log("Greeting: componentDidMount");
  }

  componentDidUpdate(_prevProps, _prevState) {
    console.log("Greeting: componentDidUpdate");
  }

  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}

export default Greeting;
