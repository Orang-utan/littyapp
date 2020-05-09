import React, { Fragment, useState, useContext, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import axios from "axios";

const Login = ({ history }) => {
  const { user, setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const handleChange = (e, { name, value }) =>
    setForm((current) => ({
      ...current,
      [name]: value,
    }));

  const handleSubmit = () => {
    // TODO : validate form

    const { username, password } = form;
    const body = JSON.stringify({ username, password });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/auth/login", body, config)
      .then((res) => {
        const user = res.data;
        setUser(user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <Fragment>
      <h1>Welcome Back!</h1>
      <p>
        Don't have an account? Register <Link to="/register">here.</Link>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Form.Input
            placeholder="jsmith"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input
            placeholder="********"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button primary type="submit">
          Login
        </Button>
      </Form>
    </Fragment>
  );
};

export default Login;
