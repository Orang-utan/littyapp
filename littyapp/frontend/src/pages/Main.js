import React, { Fragment, useContext, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { UserContext } from "../utils/UserContext";

const Main = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Fragment>
      <h1>Main</h1>
      <button className="ui button">Click Here</button>
    </Fragment>
  );
};

export default Main;
