import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../form-input/FormInput.component';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <FormInput
            type="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={e => handleChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
