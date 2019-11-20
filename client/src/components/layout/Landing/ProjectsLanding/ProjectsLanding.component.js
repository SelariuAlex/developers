import React from "react";
import ProjectImg from "../../../../img/cv.jpg";

import "./ProjectsLanding.styles.css";

export const ProjectsLanding = () => {
  return (
    <div className="project">
      <h2 className="project__title">Share your projects</h2>
      <div className="project__container">
        <section className="project__about">
          <h3>Movie app</h3>
          <p>
            A website where you can find all the new movies and search for your
            favorite ones
          </p>
          <p>See the IMDB Rating</p>
          <p>Read the plot and see all the actors</p>
        </section>
        <section>
          <div className="project__img">
            <img src={ProjectImg} alt="" />
          </div>
          <div className="project__buttons">
            <a
              className="project__button project--website"
              target="_blank"
              rel="noopener noreferrer"
              href="https://popular-movies.netlify.com/"
            >
              Website
            </a>
            <a
              className="project__button project--github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SelariuAlex/PopularMovies"
            >
              Github
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
