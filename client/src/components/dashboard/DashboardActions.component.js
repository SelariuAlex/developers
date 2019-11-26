import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary" /> Add Experience
      </Link>
      <Link to="/add-project" className="btn btn-light">
        <i className="fas fa-clipboard-list text-primary" /> Add Project
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary" /> Add Education
      </Link>
      <Link to="/add-workshop" className="btn btn-light">
        <i className="fas fa-users text-primary" /> Add Workshop/Meetup
      </Link>
    </div>
  );
};

export default DashboardActions;
