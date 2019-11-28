import React from "react";
import PropTypes from "prop-types";

const ProfileWorkshop = ({ workshop: { description } }) => (
  <div>
    <p className="fixSpace">
      <p>{description}</p>
    </p>
  </div>
);

ProfileWorkshop.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProfileWorkshop;
