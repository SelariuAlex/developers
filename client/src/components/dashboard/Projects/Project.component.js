import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../../redux/actions/profile.action";

const Project = ({ project, deleteProject }) => {
  const projects = project.map(proj => (
    <tr key={proj._id}>
      <td>{proj.project}</td>
      <td>
        <a target="_blank" href={proj.website}>
          Website Link
        </a>
      </td>
      <td>
        <a target="_blank" href={proj.github}>
          Github Link
        </a>
      </td>
      <td>
        <button
          onClick={() => deleteProject(proj._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">My Projects</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th className="hide-sm">Website</th>
            <th className="hide-sm">GitHub</th>
            <th />
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array.isRequired,
  deleteProject: PropTypes.func.isRequired
};

export default connect(null, { deleteProject })(Project);
