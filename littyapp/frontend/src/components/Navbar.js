import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    item: {
      color: "black",
    },
  };

  return (
    <div class="ui menu">
      <Link to="/" style={style.item}>
        <div class="header item">Litty App</div>
      </Link>
      <Link to="/login" style={style.item}>
        <a class="item">Login</a>
      </Link>
      <Link to="/register" style={style.item}>
        <a class="item">Register</a>
      </Link>
    </div>
  );
};

export default Navbar;
