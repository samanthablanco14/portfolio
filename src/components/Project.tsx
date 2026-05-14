import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Teaching Portfolio</h1>

   <div className="projects-grid">
  <div className="project">
    <h2>Philosophy of Learning</h2>
    <p>
      Statement reflecting my perspective on how meaningful learning
      happens and how students build understanding.
    </p>

    <div className="project-buttons">
      <a
        href={`${process.env.PUBLIC_URL}/philosophy-of-learning.pdf`}
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        View Document
      </a>
    </div>
  </div>

  <div className="project">
    <h2>Teaching Philosophy</h2>
    <p>
      Statement reflecting my perspective on how meaningful teaching
      happens and how it shapes my lesson designs.
    </p>

    <div className="project-buttons">
      <a
        href={`${process.env.PUBLIC_URL}/teaching-philosophy.pdf`}
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        View Document
      </a>
    </div>
  </div>
</div>
}

export default Project;
