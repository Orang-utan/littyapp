import React, { useEffect, useState, useContext } from "react";
import { Button, Divider, Grid, Segment } from "semantic-ui-react";
import FoodItem from "../components/FoodItem";
import CartItem from "../components/CartItem";
import axios from "axios";

const TruckMenu = ({ match, history }) => {
  const [menuData, setMenuData] = useState([]);
  const [foodTruck, setFoodTruck] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
    coverImg: "",
  });
  const [cart, setCart] = useState([]);

  const handleOrder = () => {
    console.log(cart);
    history.push("/success");
  };

  useEffect(() => {
    // call on api
    axios
      .get(`/api/foodtrucks/${match.params.id}/menu/`)
      .then((menu) => {
        setMenuData(menu.data);
        axios
          .get(`api/foodtrucks/${match.params.id}/`)
          .then((ft) => {
            const { name, phone, address, description, coverImg } = ft.data;
            setFoodTruck({
              name,
              phone,
              address,
              description,
              coverImg,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
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
        <h1>{foodTruck.name}</h1>
        <p>{foodTruck.description}</p>
        <p>
          {foodTruck.address} | {foodTruck.phone}
        </p>
      </center>
      <div style={{ margin: "30px" }} />
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <>
                {menuData.map((d) => (
                  <div key={d.id}>
                    <FoodItem name={d.name} setCart={setCart} />
                  </div>
                ))}
              </>
            </ul>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <h2 style={{ marginBottom: "20px" }}>My Shopping Cart</h2>

            {cart.length != 0 ? (
              <>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {cart.map((d, idx) => (
                    <div key={idx}>
                      <CartItem name={d} setCart={setCart} cart={cart} />
                    </div>
                  ))}
                </ul>
                <Button primary onClick={handleOrder}>
                  Place Order
                </Button>
              </>
            ) : (
              <>
                <p>Your cart is empty, start selecting some food.</p>

                <Button disabled>Place Order</Button>
              </>
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default TruckMenu;
