import "./App.scss";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page">
          <div>Nav</div>
          <div>home</div>
          <div>about</div>
          <div>resume</div>
          <div>projects</div>
          <div>contact</div>
        </div>
      </div>
    );
  }
}

export default App;
