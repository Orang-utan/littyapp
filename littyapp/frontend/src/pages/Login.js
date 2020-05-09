import React, { Fragment, useState, useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import axios from "axios";

const Login = ({ history }) => {
  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, { name, value }) =>
    setForm((current) => ({
      ...current,
      [name]: value,
    }));

  const handleSubmit = () => {
    // TODO : validate form

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { username, password } = form;
    const body = JSON.stringify({ username, password });
    axios
      .post("/api/auth/login", body, config)
      .then((res) => {
        const user = res.data;
        setUser(user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
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
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default Login;
