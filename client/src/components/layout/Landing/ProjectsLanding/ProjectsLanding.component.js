import React from "react";
import ProjectImg from "../../../../img/bedroom2.jpeg";

import "./ProjectsLanding.styles.css";

export const ProjectsLanding = () => {
  return (
    <div className="project">
      <h2 className="project__title">Share your projects</h2>
      <div className="project__container">
        <section className="project__about">
          <h3>Rental app</h3>
          <p>A website where you create your own rentals</p>
          <p>Book one of the rentals</p>
          <p>Search rentals in your city</p>
        </section>
        <section className="project__img">
          <div>
            <img src={ProjectImg} alt="" />
          </div>
          <div className="project__buttons">
            <a
              className="project__button project--website"
              target="_blank"
              rel="noopener noreferrer"
              href="https://booking-rentals.herokuapp.com/rentals"
            >
              Website
            </a>
            <a
              className="project__button project--github"
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
