import React from "react";
import ProjectImg from "../../../../img/bedroom2.jpeg";

import "./ProjectsLanding.styles.css";

export const ProjectsLanding = () => {
  return (
    <div className="project">
      <h2 className="project__title">Share your projects</h2>
      <div className="project__container">
        <section className="project__about">
          <h3 className="project__about--title">Rental app</h3>
          <h4>Description:</h4>
          <p>A website where you create and edit your own rentals</p>
          <p>Manage booking from other users</p>
          <p>Search and book rentals from other users</p>
          <h4 className="project__about--tech">Technologies used:</h4>
          <p>React.js / Node.js / Express / MongoDB</p>
          <p>Redux for state management</p>
          <p>Utilize Moment.js to implement calendar</p>
          <p>Integrate login / register using JSON Web Tokens</p>
          <p>Styling in SCSS</p>
        </section>
        <section className="project__img">
          <div>
            <img src={ProjectImg} alt="" />
          </div>
          <div className="project__buttons">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://booking-rentals.herokuapp.com/rentals"
            >
              Website
            </a>
            <a
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SelariuAlex/booking-rental"
            >
              Github
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
