import React from "react";
import PropTypes from "prop-types";

const ProfileProject = ({
  project: { project, website, github, description }
}) => (
  <div>
    <h3 className="text-dark">{project}</h3>

    <p>
      <strong>Degree: </strong> {website}
    </p>
    <p>
      <strong>Field Of Study: </strong> {github}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProfileProject;
