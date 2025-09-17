
import React from 'react';
import type { Project, SkillCategory } from './types';

// Icons
export const CodeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const DatabaseIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0" />
  </svg>
);

export const ToolIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Mock Data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Memory Match Game',
    description: 'A classic memory matching card game. Fun and engaging, built to test and improve memory skills.',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNTAiIHI9IjQwIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iMjUwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzM3NDE1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWVtb3J5IE1hdGNoPC90ZXh0Pjwvc3ZnPg==',
    liveUrl: 'https://cool-shot-memory-match.vercel.app/',
  },
  {
    id: 2,
    title: 'Chess Game',
    description: 'A fully functional chess application. Play against another person and enjoy the classic strategy game.',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMjMwIDEyMGgyMHYyMGgtMjB2LTIwWm0yMCAyMGgyMHYyMGgtMjB2LTIwWm0tMjAgMjBoMjB2MjBoLTIwdi0yMFptNDAgMGgyMHYyMGgtMjB2LTIwWiIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNoZXNzIEdhbWU8L3RleHQ+PC9zdmc+',
    liveUrl: 'https://cool-shot-chess.vercel.app/',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A sleek weather application that provides real-time weather forecasts and conditions for any location.',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMDAiIHI9IjMwIiBmaWxsPSIjRkZCRDMzIi8+PHBhdGggZD0iTTI2MCA5MEM0OCA5MCA0OCAxMzAgNzAgMTMwaDE4MGMxNSAwIDI1LTEwIDI1LTI1IDAtMTUgLTEwLTI1IC0yNS0yNSIgZmlsbD0iIzY2QTVCMCIvPjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldlYXRoZXIgQXBwPC90ZXh0Pjwvc3ZnPg==',
    liveUrl: 'https://cool-shot-weather.vercel.app/',
  },
   {
    id: 4,
    title: 'Calendar App',
    description: 'An interactive calendar to manage events, schedules, and appointments with a clean user interface.',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48cmVjdCB4PSIxODAiIHk9IjgwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjEyMCIgcng9IjEwIiBmaWxsPSIjMzc0MTUxIi8+PHJlY3QgeD0iMjAwIiB5PSIxMDAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Y5RkFGQiIvPjx0ZXh0IHg9IjI1MCIgeT0iMjIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNhbGVuZGFyIEFwcDwvdGV4dD48L3N2Zz4=',
    liveUrl: 'https://cool-shot-calendar.vercel.app/',
  },
  {
    id: 5,
    title: 'Calculator App',
    description: 'A functional and stylish calculator for all your basic and complex calculation needs.',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48cmVjdCB4PSIxODAiIHk9IjgwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgcng9IjEwIiBmaWxsPSIjMzc0MTUxIi8+PHJlY3QgeD0iMjAwIiB5PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIGZpbGw9IiNGOUZBRkIiLz48Y2lyY2xlIGN4PSIyMTAiIGN5PSIxNDAiIHI9IjgiIGZpbGw9IiNGOUZBRkIiLz48dGV4dCB4PSIyNTAiIHk9IjI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMzc0MTUxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DYWxjdWxhdG9yIEFwcDwvdGV4dD48L3N2Zz4=',
    liveUrl: 'https://cool-shot-calculator.vercel.app/',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'TypeScript', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'JavaScript (ES6+)', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Tailwind CSS', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Next.js', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Vue.js', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'HTML5 & CSS3', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Sass/SCSS', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Bootstrap', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
      { name: 'Responsive Design', icon: <CodeIcon className="w-6 h-6 mr-3 text-cyan-500" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'Express', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'Python', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'FastAPI', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'PostgreSQL', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'MongoDB', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'MySQL', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'REST APIs', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'GraphQL', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
      { name: 'JWT Authentication', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-green-500" /> },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Docker', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Kubernetes', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'AWS Services', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Vercel', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Netlify', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Vite', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Webpack', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Figma', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
      { name: 'Adobe Creative Suite', icon: <ToolIcon className="w-6 h-6 mr-3 text-orange-500" /> },
    ],
  },
  {
    title: 'Mobile & Cross-Platform',
    skills: [
      { name: 'React Native', icon: <CodeIcon className="w-6 h-6 mr-3 text-purple-500" /> },
      { name: 'Flutter', icon: <CodeIcon className="w-6 h-6 mr-3 text-purple-500" /> },
      { name: 'Expo', icon: <CodeIcon className="w-6 h-6 mr-3 text-purple-500" /> },
      { name: 'Progressive Web Apps', icon: <CodeIcon className="w-6 h-6 mr-3 text-purple-500" /> },
    ],
  },
  {
    title: 'Other Technologies',
    skills: [
      { name: 'Firebase', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
      { name: 'Supabase', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
      { name: 'Stripe Integration', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
      { name: 'Socket.io', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
      { name: 'WebRTC', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
      { name: 'Machine Learning (Python)', icon: <DatabaseIcon className="w-6 h-6 mr-3 text-red-500" /> },
    ],
  },
];
