import React, { Fragment, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (e, { name, value }) =>
    setForm((current) => ({
      ...current,
      [name]: value,
    }));

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Fragment>
      <h1>Welcome Back!</h1>
      <p>
        Don't have an account? Register <Link to="/register">here.</Link>
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
