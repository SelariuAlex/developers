import React from "react";
import PropTypes from "prop-types";

const ProfileProject = ({
  project: { project, website, github, description }
}) => (
  <div>
    <h3 className="text-dark">{project}</h3>

    <p>
      <strong>Website: </strong>
      <a target="_blank" href={website}>
        {website}
      </a>
    </p>
    <p>
      <strong>Field Of Study: </strong>
      <a target="_blank" href={github}>
        {github}
      </a>
    </p>
    <p className="fixSpace">
      <strong>Description: </strong>
      <p>{description}</p>
    </p>
  </div>
);

ProfileProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProfileProject;