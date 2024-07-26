// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, techStack, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-lg text-gray-700 mb-4">
      <strong>Technologies:</strong> {techStack}
    </p>
    <p className="text-gray-600 mb-4">{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-yellow-400 hover:text-yellow-500 flex items-center space-x-1"
      >
        <span>View Project</span>
        <FaExternalLinkAlt />
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 text-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <ProjectCard
            title="Ecommerce Site UI"
            techStack="React.js, Redux, API (2023)"
            description="A website designed to provide a solution for buying products. Users can manage items by adding them to the cart for later use. Utilized API for data fetching and integrated Redux with React components to enhance application performance and user experience."
            link="https://example.com/ecommerce-site"
          />
          {/* Project 2 */}
          <ProjectCard
            title="Foodie Hub"
            techStack="React.js, Bootstrap, MongoDB, Mongoose, Express.js, Node.js (2024)"
            description="Developed a robust food delivery application using modern technologies such as React, Node.js, and MongoDB. The application provides a seamless user experience with efficient backend functionality, including CRUD operations for ordering food."
            link="https://example.com/foodie-hub"
          />
          {/* Project 3 */}
          <ProjectCard
            title="Gif Generator"
            techStack="HTML, CSS, React.js, API (2023)"
            description="Developed a website that displays different images related to a typed keyword using API calls. Integrated external APIs such as Giphy API with Axios in React projects to dynamically fetch and display content based on user input."
            link="https://example.com/gif-generator"
          />
          {/* Project 4 */}
          <ProjectCard
            title="Authentication and Authorization"
            techStack="Express.js, MongoDB, Mongoose, Postman (2024)"
            description="Implemented robust authentication and authorization mechanisms using Express.js, MongoDB, and Mongoose. Utilized Cookie parser and JWT tokens to ensure secure and reliable user login and session management across the application. Conducted thorough testing with Postman to validate the security and functionality of authentication endpoints."
            link="https://example.com/authentication-authorization"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
