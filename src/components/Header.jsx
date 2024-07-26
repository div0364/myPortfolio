// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="bg-mint-green p-4 text-dark-green flex justify-between items-center shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold tracking-wider hover:text-dark-green"
        whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        My Portfolio
      </motion.h1>
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <motion.a
              href="#home"
              className="hover:text-dark-green transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Home
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#about"
              className="hover:text-dark-green transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              className="hover:text-dark-green transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Projects
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#skills"
              className="hover:text-dark-green transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Skills
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              className="hover:text-dark-green transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#004d00" }} // Darker green on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
