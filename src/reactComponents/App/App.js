import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Button from "../../storybookComponents/Button/Button";
import Input from "../../storybookComponents/Input/Input";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Create from "../Create/Create";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      navOpen: false
    };
  }
  showNav = e => {
    if (this.state.navOpen === false) {
      e.preventDefault();
      this._nav.style.width = "200px";
      this.setState({ navOpen: true });
    }
  };

  closeNav = e => {
    if (this.state.navOpen) {
      e.preventDefault();
      this._nav.style.width = "0";
      this.setState({ navOpen: false });
    }
  };

  componentDidMount() {
    let url = "";
    if (process.env.NODE_ENV === "production") {
      url = "https://recipe-roledex.herokuapp.com/";
    }
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8080/";
    }
    // console.log(process.env.NODE_ENV)
    axios
      .get(url)
      .then(res => {
        this.setState({ recipes: res.data });
        console.log(res);
        console.log(process.env.NODE_ENV);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button label="Home" />
          <img src={logo} className="App-logo" alt="logo" />
          <Button label="===" handleClick={this.showNav} />
        </header>
        <nav ref={c => (this._nav = c)}>
          <div className="close-nav" onClick={this.closeNav}>
            X
          </div>
          <Link to="/home">
            <p>Home</p>
          </Link>
          <Link to="/create">
            <p>Create</p>
          </Link>
        </nav>
        <main>
          <Route
            path="/home"
            exact
            render={routerProps => (
              <Home {...routerProps} recipe={this.state.recipes} />
            )}
          />
          <Route
            path="/create"
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
            {/* <a className="A" href="http://www" target="_blank">
              www.somthimg.com
            </a> */}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
