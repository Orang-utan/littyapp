import React, { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import TruckCard from "../components/TruckCard";
import { Divider } from "semantic-ui-react";
import axios from "axios";

const Main = () => {
  const { user } = useContext(UserContext);

  const data = [
    {
      id: "1",
      name: "Halal Guy",
      address: "3650 Spruce Street",
      description: "Best halal in Philly",
    },
    {
      id: "2",
      name: "Ramen Guy",
      address: "3650 Spruce Street",
      description: "Best ramen in Philly",
    },
  ];

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Fragment>
      {user ? (
        <>
          <h1>Hello, {user.user.username}!</h1>
          <p>Start ordering from our selection of food trucks below.</p>
        </>
      ) : (
        <>
          <h1>Welcome to Litty!</h1>
          <p>Looks like you don't have an account yet. Sign up here.</p>
        </>
      )}
      <Divider />
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <>
          {data.map((d) => (
            <div key={d.id}>
              <TruckCard
                id={d.id}
                name={d.name}
                address={d.address}
                description={d.description}
              />
            </div>
          ))}
        </>
      </div>
    </Fragment>
  );
};

export default Main;
