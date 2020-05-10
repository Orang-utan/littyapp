import React from "react";
import { List, Button, Icon, Divider } from "semantic-ui-react";

const CartItem = ({ name }) => {
  const buttonStyle = {
    float: "right",
    verticalAlign: "middle",
    transform: "translate(0%, -75%)",
  };

  return (
    <li>
      <h4>
        {name}
        <div>
          <Button circular icon="delete" style={buttonStyle} size="small" />
        </div>
      </h4>
      <Divider />
    </li>
  );
};

export default CartItem;
