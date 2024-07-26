// src/components/Skills.jsx
import React from 'react';
import { FaCode, FaDatabase, FaTools, FaBook } from 'react-icons/fa';
import { DiReact, DiCss3, DiHtml5, DiNodejs } from 'react-icons/di';
import { SiJavascript, SiMongodb, SiRedux, SiExpress, SiTailwindcss, SiGit, SiGithub, SiBootstrap, SiMongoose } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Languages',
    items: [
      { icon: <SiJavascript className="text-yellow-500 text-3xl" />, name: 'JavaScript' },
      { icon: <FaCode className="text-blue-500 text-3xl" />, name: 'C++' },
      { icon: <FaCode className="text-green-500 text-3xl" />, name: 'C' },
    ],
  },
  {
    title: 'Technologies/Frameworks',
    items: [
      { icon: <DiHtml5 className="text-orange-500 text-3xl" />, name: 'HTML5' },
      { icon: <DiCss3 className="text-blue-500 text-3xl" />, name: 'CSS' },
      { icon: <SiMongodb className="text-green-500 text-3xl" />, name: 'MongoDB' },
      { icon: <DiReact className="text-blue-600 text-3xl" />, name: 'React' },
      { icon: <SiRedux className="text-purple-600 text-3xl" />, name: 'Redux' },
      { icon: <SiExpress className="text-green-600 text-3xl" />, name: 'Express.js' },
      { icon: <SiBootstrap className="text-purple-600 text-3xl" />, name: 'Bootstrap' },
      { icon: <SiTailwindcss className="text-blue-400 text-3xl" />, name: 'Tailwind CSS' },
      { icon: <SiMongoose className="text-green-600 text-3xl" />, name: 'Mongoose' },
      { icon: <DiNodejs className="text-green-500 text-3xl" />, name: 'Node.js' },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { icon: <SiGit className="text-orange-500 text-3xl" />, name: 'Git' },
      { icon: <SiGithub className="text-black text-3xl" />, name: 'GitHub' },
    ],
  },
  {
    title: 'Coursework',
    items: [
      { icon: <FaBook className="text-green-500 text-3xl" />, name: 'Data Structures and Algorithms (DSA)' },
      { icon: <FaBook className="text-green-500 text-3xl" />, name: 'OOP Concepts' },
      { icon: <FaBook className="text-green-500 text-3xl" />, name: 'Operating Systems (OS)' },
      { icon: <FaBook className="text-green-500 text-3xl" />, name: 'Database Management Systems (DBMS)' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-200 text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center space-y-2 transition-transform duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                    <span className="text-gray-700">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
