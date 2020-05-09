import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import BrokenLink from "./BrokenLink";
import Navbar from "../components/Navbar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/" component={BrokenLink} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
