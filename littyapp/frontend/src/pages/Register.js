import React, { Fragment, useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Register = () => {
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
          <label>Password</label>
          <Form.Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Form.Input
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
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default Register;
