import React from "react";
import "./style.css";
import Greeting from "./Greeting";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting greeting={'Hello React'} />
        <Message message={'Happy coding :)'} />
      </div>
    );
  }
}

export default App;
