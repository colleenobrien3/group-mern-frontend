import React, { Component } from "react";
import logo from "../../images/01_lpgo.png";
import "./App.css";
import Button from "../../storybookComponents/Button/Button";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Create from "../Create/Create";
import CardContainer from "../CardContainer/CardContainer";
import Response from "../Response/Response";
import Navbar from "../Navbar/Navbar";

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
      liked: false,
      email: "",
      password: "",
      loggedIn: false
    };
  }

  getInputName = event => {
    this.setState({ email: event.target.value });
  };

  getInputPassword = event => {
    this.setState({ password: event.target.value });
  };

  signUp = e => {
    // e.preventDefault();
    axios
      .post(`${url}users/signup`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(localStorage);
        localStorage.token = res.data.token;
        this.setState({ loggedIn: true });
        console.log(localStorage.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  signIn = e => {
    // e.preventDefault();
    axios
      .post(`${url}users/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({ loggedIn: true });
        // console.log(localStorage);
        // console.log(localStorage.token);
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  logOut = e => {
    this.setState({
      email: "",
      password: "",
      loggedIn: false
    });
    localStorage.clear();
    console.log();
  };

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
    // console.dir(e.target.nextElementSibling.firstElementChild.innerHTML);

    let number = e.target.nextElementSibling.firstElementChild.innerHTML;
    number = Number(number);
    axios
      .put(`${url}${e.target.id}`, { likes: number + 1 })
      .then(this.setState({ liked: true }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({ recipes: res.data });
        // console.log(res);
        console.log(process.env.NODE_ENV);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(localStorage);
    console.log(this.state.liked);
    if (this.state.deleted || this.state.posted || this.state.liked) {
      axios
        .get(url)
        .then(res => {
          this.setState({
            recipes: res.data,
            deleted: false
          });
          console.log(res);
          console.log(process.env.NODE_ENV);
        })
        .then(() => {
          this.setState({
            liked: false
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
    console.log(this.state.deleted);
    return (
      <div className="App">
        <header className="App-header">
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
          {/* <Button label="Home" /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <em>Recipe Rolodex</em>
          </h1>
          <Button label="" handleClick={this.showNav} background="hamburger" />
        </header>
        <Navbar
          closeNav={this.closeNav}
          open={c => (this._nav = c)}
          loggedIn={this.state.loggedIn}
          logout={this.logOut}
        />
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
                setPassword={this.getInputPassword}
                setEmail={this.getInputName}
                signUp={this.signUp}
                signIn={this.signIn}
                loggedIn={this.state.loggedIn}
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
          <Route
            path="/recipes"
            exact
            render={routerProps => (
              <CardContainer
                {...routerProps}
                recipes={this.state.recipes}
                delete={this.deleteCard}
                like={this.like}
              />
            )}
          />
          <Route
            path="/response"
            exact
            render={() => <Response loggedIn={this.state.loggedIn} />}
          />
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
