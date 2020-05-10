import React from "react";
import { List, Button, Icon, Divider } from "semantic-ui-react";

const FoodItem = ({ name }) => {
  const buttonStyle = {
    float: "right",
    verticalAlign: "middle",
    transform: "translate(0%, -85%)",
  };

  return (
    <li>
      <h3>
        {name}
        <div>
          <Button style={buttonStyle}>Add</Button>
        </div>
      </h3>
      <Divider />
    </li>
  );
};

export default FoodItem;
