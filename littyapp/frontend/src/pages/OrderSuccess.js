import React from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";

const OrderSuccess = ({ history }) => {
  const handleComplete = () => {
    history.push("/");
  };

  return (
    <center>
      <h1 style={{ marginTop: "40px" }}>Order Success</h1>
      <img
        src="/static/images/success.png"
        style={{ width: "25%", height: "auto" }}
      />
      <h3>Your pickup code is: GOOFY</h3>
      <p>3650 Spruce | 5106041131</p>
      <Button primary onClick={handleComplete}>
        I've picked up my food
      </Button>
    </center>
  );
};

export default OrderSuccess;
