import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      <div>
        <h1>Projects</h1>
        <div className="projects-grid gap-12">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-grid {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        }

        @media (min-width: 475px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
          }
        }
      `}</style>
    </>
  );
}
