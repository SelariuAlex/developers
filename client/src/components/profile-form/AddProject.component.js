import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProject } from "../../redux/actions/profile.action";
import FormInput from "../form-input/FormInput.component";

const AddProject = ({ addProject, history }) => {
  const [formData, setFormData] = useState({
    project: "",
    website: "",
    github: "",
    description: ""
  });

  const { project, website, github, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Project</h1>
      <p className="lead">
        <i className="fas fa-clipboard-list" /> Add any project you worked on
      </p>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addProject(formData, history);
        }}
      >
        <div className="form-group">
          <FormInput
            type="text"
            label="Project name"
            name="project"
            value={project}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <FormInput
            type="text"
            label="Website link"
            name="website"
            value={website}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <FormInput
            type="text"
            label="Github link"
            name="github"
            value={github}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Project Description"
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

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(withRouter(AddProject));
