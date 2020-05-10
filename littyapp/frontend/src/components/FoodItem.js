import React from "react";
import { List, Button, Icon, Divider } from "semantic-ui-react";

const FoodItem = ({ name, setCart }) => {
  const buttonStyle = {
    float: "right",
    verticalAlign: "middle",
    transform: "translate(0%, -85%)",
  };

  const handleAdd = () => {
    setCart((c) => [...c, name]);
  };

  return (
    <li>
      <h3>
        {name}
        <div>
          <Button style={buttonStyle} onClick={handleAdd}>
            Add
          </Button>
        </div>
      </h3>
      <Divider />
    </li>
  );
};

export default FoodItem;
