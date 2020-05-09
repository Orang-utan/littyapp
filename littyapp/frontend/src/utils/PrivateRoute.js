import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
