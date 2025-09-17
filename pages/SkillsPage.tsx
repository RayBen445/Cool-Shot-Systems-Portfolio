
import React from 'react';
import NeumorphicCard from '../components/NeumorphicCard';
import { SKILLS } from '../constants';

const SkillsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <NeumorphicCard key={category.title}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{category.title}</h2>
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center bg-[#e0e5ec] p-3 rounded-lg shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]"
                >
                  {skill.icon}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </li>
              ))}
            </ul>
          </NeumorphicCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
