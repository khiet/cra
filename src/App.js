import React from "react";
import "./style.css";
import Greeting from "./Greeting";
import Message from "./Message";

class App extends React.Component {
  state = { isShow: true }

  toggleShow = () => {
    this.setState((state, _props) => ({ isShow: !state.isShow }))
  }

  componentDidMount() {
    console.log("App: componentDidMount");
  }

  componentDidUpdate(_prevProps, _prevState) {
    console.log("App: componentDidUpdate");
  }

  render() {
    return (
      <div>
        <Greeting greeting={'Hello React'} />
        <Message message={'Happy coding :)'} isShow={this.state.isShow} />
        <button onClick={this.toggleShow} type="button">
          Toggle isShow
        </button>
      </div>
    );
  }
}

export default App;
