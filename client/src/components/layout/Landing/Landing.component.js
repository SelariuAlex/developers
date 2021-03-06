import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ProjectsLanding } from "./ProjectsLanding/ProjectsLanding.component";
import { ExperienceLanding } from "./ExperienceLanding/ExperienceLanding.component";

import "./landing.styles.css";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <section className="landing">
        <div className="landing__banner dark-overlay">
          <div className="landing__inner">
            <h1 className="x-large">Developers Portfolios</h1>
            <p className="lead">
              Create your developer portfolio, share it with the word, help
              beginners and juniors get a job
            </p>
            <div className="landing__buttons">
              <Link className="btn btn-primary" to="/register">
                Sign Up
              </Link>
              <Link className="btn btn-light" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ProjectsLanding />
      <h2 className="project__title">Experience and Education</h2>
      <ExperienceLanding />
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
