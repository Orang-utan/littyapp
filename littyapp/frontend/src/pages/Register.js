import React, { Fragment, useState, useContext, useEffect } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../utils/UserContext";

const Register = ({ history }) => {
  const { user, setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmedPassword: "",
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

    const { username, email, password } = form;
    const body = JSON.stringify({ username, email, password });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/auth/register", body, config)
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
      <h1>Create an Account.</h1>
      <p>
        Already have an account? Login <Link to="/login">here.</Link>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <Form.Input
            placeholder="jsmith@gmail.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Field>
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
        <Form.Field>
          <label>Confirm Password</label>
          <Form.Input
            placeholder="********"
            type="password"
            name="confirmedPassword"
            value={form.confirmedPassword}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button primary type="submit">
          Register
        </Button>
      </Form>
    </Fragment>
  );
};

export default Register;
