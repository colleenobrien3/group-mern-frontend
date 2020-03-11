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
    this.state = {
      recipes: []
    };
  }
  showNav = e => {
    e.preventDefault();
    this._nav.style.width = "200px";
  };
  componentDidMount() {
    let url = "http://localhost:8080/";
    let recipes = "";
    let recipesState = [];
    fetch(url)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => {
        recipes = response;
        recipes.forEach(item => {
          recipesState.push(item);
          this.setState({ recipes: recipesState });
          console.log(this.state);
        });
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
          {/* <button label="---" onClick={this.showNav}>
            hi
          </button> */}
          <Button label="===" handleClick={this.showNav} />
        </header>
        <nav ref={c => (this._nav = c)}>
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
            render={routerProps => <Home {...routerProps} {...this.state} />}
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
