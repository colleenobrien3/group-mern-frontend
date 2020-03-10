import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./storybookComponents/Button/Button";

// function openNav() {
//   document.querySelector({ nav }).style.width = "20%";
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showNav = e => {
    e.preventDefault();
    alert("hi");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button label="Home" />
          <img src={logo} className="App-logo" alt="logo" />
          <button label="---" onClick={this.showNav}>
            hi
          </button>
        </header>
        <nav ref={c => (this._nav = c)}>
          {/* <p>Home</p>
          <p>Profile</p> */}
        </nav>
      </div>
    );
  }
}

export default App;
