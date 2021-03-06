import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/actions/alert.action';
import { registerUser } from '../../../redux/actions/auth.action';
import FormInput from '../../form-input/FormInput.component';
import PropTypes from 'prop-types';

const Register = ({ setAlert, registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <FormInput
            type="text"
            label="Name"
            name="name"
            value={name}
            onChange={e => handleChange(e)}
          />
        </div>
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
        <div className="form-group">
          <FormInput
            type="password"
            label="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => handleChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, registerUser }
)(Register);
