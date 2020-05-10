import React from "react";
import { List, Button, Icon, Divider } from "semantic-ui-react";

const CartItem = ({ name, setCart, cart }) => {
  const buttonStyle = {
    float: "right",
    verticalAlign: "middle",
    transform: "translate(0%, -75%)",
  };

  const handleClick = () => {
    const cartCopy = JSON.parse(JSON.stringify(cart));
    for (let index = 0; index < cartCopy.length; index++) {
      if (cartCopy[index] == name) {
        cartCopy.splice(index, 1);
        break;
      }
    }

    setCart(cartCopy);
  };

  return (
    <li>
      <h4>
        {name}
        <div>
          <Button
            circular
            icon="delete"
            style={buttonStyle}
            size="small"
            onClick={handleClick}
          />
        </div>
      </h4>
      <Divider />
    </li>
  );
};

export default CartItem;
