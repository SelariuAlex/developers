import React from "react";
import PropTypes from "prop-types";

const ProfileProject = ({
  project: { project, website, github, description }
}) => (
  <div>
    <h3 className="text-dark">{project}</h3>

    <p>
      <strong>Website: </strong>
      <a target="_blank" rel="noopener noreferrer" href={website}>
        {website}
      </a>
    </p>
    <p>
      <strong>Github: </strong>
      <a target="_blank" rel="noopener noreferrer" href={github}>
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
