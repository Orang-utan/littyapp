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
      <div class="header item">
        <Link to="/" style={style.item}>
          Litty App
        </Link>
      </div>
      <a class="item">
        <Link to="/login" style={style.item}>
          Login
        </Link>
      </a>
      <a class="item">
        <Link to="/register" style={style.item}>
          Register
        </Link>
      </a>
    </div>
  );
};

export default Navbar;
