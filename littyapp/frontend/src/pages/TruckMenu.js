import React, { useEffect, useState } from "react";
import { List, Button, Icon, Divider, Grid, Segment } from "semantic-ui-react";
import FoodItem from "../components/FoodItem";
import CartItem from "../components/CartItem";

const TruckMenu = ({ match }) => {
  const menuData = ["Lamb Over Rice", "Pepperoni Pizza", "Ramen", "Coke"];

  useEffect(() => {
    // call on api
    console.log(match.params.id);
  }, [match.params.id]);

  return (
    <>
      <center
        style={{
          backgroundColor: "#1abc9c",
          padding: "20px",
          color: "white",
          borderRadius: "15px",
        }}
      >
        <h1>Halal Guy's Menu</h1>
        <p>We serve the best Halal in Philly.</p>
        <p>3650 Spruce Street</p>
      </center>
      <div style={{ margin: "30px" }} />
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <>
                {menuData.map((d) => (
                  <div key={d}>
                    <FoodItem name={d} />
                  </div>
                ))}
              </>
            </ul>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <h2 style={{ marginBottom: "30px" }}>My Shopping Cart</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <CartItem name={"Lamb Over Rice"} />
              <CartItem name={"Lamb Over Rice"} />
            </ul>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default TruckMenu;
