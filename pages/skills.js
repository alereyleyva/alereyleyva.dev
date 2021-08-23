import React from 'react';
import skills from '../data/skills';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  return (
    <>
      <div>
        <h1>Skills</h1>
        <div className="skills-grid md:pb-9">
          {skills.map((skill) => (
            <SkillCard {...skill} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
        }

        @media (min-width: 475px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
          }
        }

        @media (min-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
          }
        }

        @media (min-width: 1100px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
          }
        }
      `}</style>
    </>
  );
}
