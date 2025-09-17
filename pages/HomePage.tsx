
import React from 'react';
import { Link } from 'react-router-dom';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <NeumorphicCard className="flex flex-col items-center" padding="p-8 md:p-12">
        <div 
          className="w-40 h-40 rounded-full bg-[#e0e5ec] p-2 shadow-[inset_7px_7px_15px_#a3b1c6,inset_-7px_-7px_15px_#ffffff]"
        >
          <img
            src="https://picsum.photos/seed/profile/200"
            alt="Heritage Oladoye"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <h1 className="mt-8 text-4xl md:text-5xl font-bold text-gray-800">
          Heritage Oladoye
        </h1>
        <p className="mt-1 text-lg text-gray-500">
          (aka Professor)
        </p>
        <p className="mt-2 text-xl md:text-2xl text-cyan-600 font-semibold">
          CEO of Cool Shot Systems
        </p>

        <p className="mt-6 max-w-2xl text-gray-600 leading-relaxed">
          I specialize in building exceptional digital experiences. With a deep expertise in React, TypeScript, and modern UI/UX principles, I transform complex problems into intuitive, beautiful, and functional web applications.
        </p>

        <Link to="/projects" className="mt-8">
          <NeumorphicButton padding="py-4 px-8 text-lg">
            View My Work
          </NeumorphicButton>
        </Link>
      </NeumorphicCard>
    </div>
  );
};

export default HomePage;