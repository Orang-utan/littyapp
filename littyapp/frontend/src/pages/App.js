import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import BrokenLink from "./BrokenLink";
import Navbar from "../components/Navbar";
import { Container } from "semantic-ui-react";
import { UserContext } from "../utils/UserContext";

const App = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }));

  return (
    <Container>
      <Router>
        <UserContext.Provider value={providerValue}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/" component={BrokenLink} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
