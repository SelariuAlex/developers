import React from "react";

import "./ExperienceLanding.styles.css";

export const ExperienceLanding = () => {
  return (
    <div className="experience">
      <section className="experience__bg">
        <div className="experience__bg--text">
          <h3>Experience</h3>
          <p>Web Developer at Booking.com</p>
          <p>Helped develop the mobile app</p>
          <p>Employed faster search</p>
        </div>
      </section>
      <section className="education__bg">
        <div className="experience__bg--text">
          <h3>Education</h3>
          <p>West University of Timisoara</p>
          <p>Faculty of Economics and Business Administration</p>
          <p>Master’s degree in Human Resource Management</p>
        </div>
      </section>
    </div>
  );
};
