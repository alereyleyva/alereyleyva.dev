import React from 'react';
import skills from '../data/skills';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skills-grid md:pb-9">
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
    </div>
  );
}
