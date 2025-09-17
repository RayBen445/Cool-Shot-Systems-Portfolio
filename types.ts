// Fix: Import React to use React.ReactNode type.
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
