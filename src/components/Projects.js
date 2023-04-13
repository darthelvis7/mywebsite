import React from "react";
import p1 from "../p1.jpg";
import p2 from "../p2.jpg";
import p3 from "../p3.jpg";
import p4 from "../p4.jpg";



const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vite Bank",
      description: "A modern web design for a banking site. Built using Vite and React.",
      image: p1,
      link: "https://darthelvis7.github.io/bankvite/"
    },
    {
      id: 2,
      title: "NASA Images",
      description: "View and favorite images from NASA. HTML, CSS, and JS web abb that accesses the NASA images and video API.",
      image: p2,
      link: "https://darthelvis7.github.io/nasaphoto/"
    },
    {
      id: 3,
      title: "Trident R3",
      description: "Web design for a jetski company. Used AI to generate art to fit the company's brand.",
      image: p3,
      link: "https://darthelvis7.github.io/jetski/"
    },
    {
      id: 4,
      title: "Pokedex5000",
      description: "A fun web app that uses the Pokemon API to showcase the original 150 pokemon.",
      image: p4,
      link: "https://darthelvis7.github.io/pokedex/"
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-info">
              <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
