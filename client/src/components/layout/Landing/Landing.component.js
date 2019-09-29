import React from 'react';
import { Link } from 'react-router-dom';

import './landing.styles.css';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
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
  );
};

export default Landing;
