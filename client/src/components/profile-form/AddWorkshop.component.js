import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWorkshop } from "../../redux/actions/profile.action";

const AddWorkshop = ({ addWorkshop, history }) => {
  const [formData, setFormData] = useState({
    description: ""
  });

  const { description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Workshops and Meetups</h1>
      <p className="lead">
        <i className="fas fa-clipboard-list" /> Add any Workshops and Meetups
        you attended
      </p>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addWorkshop(formData, history);
        }}
      >
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Workshops and Meetups"
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddWorkshop.propTypes = {
  addWorkshop: PropTypes.func.isRequired
};

export default connect(null, { addWorkshop })(withRouter(AddWorkshop));
