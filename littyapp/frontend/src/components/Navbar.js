import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/login" style={style.item} className="header item">
          Login
        </Link>
        <Link to="/register" style={style.item} className="header item">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
