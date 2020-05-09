import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import axios from "axios";

const Navbar = ({ history }) => {
  const { user, setUser } = useContext(UserContext);

  const style = {
    item: {
      color: "black",
    },
  };

  const logout = () => {
    const config = {
      headers: {
        Authorization: `Token ${user.token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/auth/logout", null, config)
      .then(() => {
        setUser(null);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ui menu">
      <Link to="/" style={style.item} className="header item">
        Litty App
      </Link>
      <div className="right menu">
        {user ? (
          <>
            <Link to="/profile" style={style.item} className="header item">
              Profile
            </Link>
            <Link
              to="#"
              style={style.item}
              className="header item"
              onClick={logout}
            >
              Logout
            </Link>
          </>
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
