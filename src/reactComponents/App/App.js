import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Button from "../../storybookComponents/Button/Button";
import Input from "../../storybookComponents/Input/Input";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Create from "../Create/Create";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showNav = e => {
    e.preventDefault();
    this._nav.style.width = "200px";
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button label="Home" />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button label="---" onClick={this.showNav}>
            hi
          </button> */}
          <Button label="===" handleClick={this.showNav} />
        </header>
        <nav ref={c => (this._nav = c)}>
          <Link to="/home">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
        <main>
          <Route
            path="/home"
            exact
            render={routerProps => <Home {...routerProps} {...this.state} />}
          />
          <Route
            path="/home"
            exact
            render={routerProps => <Create {...routerProps} {...this.state} />}
          />
        </main>
        <footer className="footer">
          <h4>
            CREATED BY | Colleen O'Brien / Caio Ingber / Rachel Israel / Levani
            Papashvili
          </h4>
          <p>
            &copy; 2020 Copyright
            <a className="A" href="http://www" target="_blank">
              www.somethimg.com
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
