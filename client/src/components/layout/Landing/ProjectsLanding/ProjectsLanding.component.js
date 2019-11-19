import React from "react";
import "./ProjectsLanding.styles.css";

export const ProjectsLanding = () => {
  return (
    <div className="project">
      <h2>Share your projects</h2>
      <div>
        <section>
          <div className="project__img"></div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://popular-movies.netlify.com/"
          >
            Website
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SelariuAlex/PopularMovies"
          >
            Github
          </a>
        </section>
        <section>
          <h3>Title: Movie app</h3>
          <h4>Description:</h4>
          <p>
            A website where you can find all the new movies and search for your
            favorite ones
          </p>
          <p>See the IMDB Rating</p>
          <p>Read the plot and see the director and actors</p>
        </section>
      </div>
    </div>
  );
};
