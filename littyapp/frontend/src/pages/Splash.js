import React from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";

const Splash = ({ history }) => {
  const handleComplete = () => {
    history.push("/");
  };

  return (
    <center>
      <h1 style={{ marginTop: "40px" }}>Welcome to Litty!</h1>
      <p>
        Order from our vast selection of food trucks right on the Litty App!
      </p>
      <img
        src="/static/images/order.png"
        style={{ width: "25%", height: "auto" }}
      />
      <div style={{ margin: "30px" }} />
      <Button primary onClick={handleComplete}>
        Start Ordering
      </Button>
    </center>
  );
};

export default Splash;
