
import React from 'react';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project) => (
          <NeumorphicCard key={project.id} className="flex flex-col">
            <img src={project.imageUrl} alt={project.title} className="rounded-lg object-cover w-full h-48" />
            <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">{project.title}</h2>
            <p className="text-gray-600 flex-grow">{project.description}</p>
            <div className="flex space-x-4 mt-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <NeumorphicButton>Live Demo</NeumorphicButton>
                </a>
              )}
              {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <NeumorphicButton>Source Code</NeumorphicButton>
                </a>
              )}
            </div>
          </NeumorphicCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
