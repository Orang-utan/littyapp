import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const style = {
    item: {
      color: "black",
    },
  };

  return (
    <div className="ui menu">
      <Link to="/" style={style.item} className="header item">
        Litty App
      </Link>
      <div className="right menu">
        {user ? (
          <Link to="/" style={style.item} className="header item">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" style={style.item} className="header item">
              Login
            </Link>
            <Link to="/register" style={style.item} className="header item">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
