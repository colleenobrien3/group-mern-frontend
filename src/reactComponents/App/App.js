import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import Button from "../../storybookComponents/Button/Button";
// import Input from "../../storybookComponents/Input/Input";
import { Route, Link, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Create from "../Create/Create";
import Deleted from "../Deleted/Deleted";

let url = "";
if (process.env.NODE_ENV === "production") {
  url = "https://recipe-roledex.herokuapp.com/";
}
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:8080/";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      navOpen: false,
      deleted: false,
      liked: false
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

  refreshPost = () => {
    // e.preventDefault();
    this.setState({ posted: true });
  };

  deleteCard = e => {
    e.persist();
    axios.delete(`${url}${e.target.id}`).then(res => {
      this.setState({ deleted: true });
    });
  };

  like = e => {
    e.persist();
    let number = e.target.firstElementChild.childNodes[1].innerHTML;
    number = Number(number);
    axios
      .put(`${url}${e.target.id}`, { likes: number + 1 })
      .then(this.setState({ liked: true }));
  };

  componentDidMount() {
    // let url = "";
    // if (process.env.NODE_ENV === "production") {
    //   url = "https://recipe-roledex.herokuapp.com/";
    // }
    // if (process.env.NODE_ENV === "development") {
    //   url = "http://localhost:8080/";
    // }
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
    console.log(this.state.liked);
    if (this.state.deleted || this.state.posted || this.state.liked) {
      // let url = "";
      // if (process.env.NODE_ENV === "production") {
      //   url = "https://recipe-roledex.herokuapp.com/";
      // }
      // if (process.env.NODE_ENV === "development") {
      //   url = "http://localhost:8080/";
      // }
      axios
        .get(url)
        .then(res => {
          this.setState({
            recipes: res.data,
            deleted: false,
            posted: false
            // liked: false
          });
          console.log(res);
          console.log(process.env.NODE_ENV);
        })
        .catch(err => {
          console.error(err);
        });
    }
    console.log(this.state.deleted);
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
          <div>
            <Link to="/home">
              <p>Home</p>
            </Link>
          </div>

          <Link to="/create">
            <p>Create</p>
          </Link>
        </nav>
        <main>
          <Route
            path="/"
            exact
            render={routerProps => (
              <Home
                {...routerProps}
                recipe={this.state.recipes}
                delete={this.deleteCard}
                like={this.like}
              />
            )}
          />
          <Route
            path="/create"
            exact
            render={routerProps => (
              <Create
                {...routerProps}
                {...this.state}
                post={this.refreshPost}
              />
            )}
          />
          <Route path="/deleted">
            <Deleted />
          </Route>
        </main>
        <footer className="footer">
          <h4>
            CREATED BY | Colleen O'Brien | Caio Ingber | Rachel Israel | Levani
            Papashvili<br></br>
            <br></br>
            &copy; 2020 Copyright
            {/* <a className="A" href="http://www" target="_blank">
              www.somth img.com
            </a> */}
          </h4>
        </footer>
      </div>
    );
  }
}

export default App;
