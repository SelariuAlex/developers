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
  workshop: PropTypes.object.isRequired
};

export default ProfileWorkshop;
