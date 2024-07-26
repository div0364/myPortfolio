import React from 'react';
import { FaInstagram, FaGithub, FaCode } from 'react-icons/fa';
import { SiCodeforces, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-6 text-white text-center">
      <div className="flex justify-center flex-wrap mb-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <FaGithub className="text-2xl mr-2" />
          <span className="hidden md:inline">GitHub</span>
        </a>
        <a 
          href="https://www.instagram.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <FaInstagram className="text-2xl mr-2" />
          <span className="hidden md:inline">Instagram</span>
        </a>
        <a 
          href="https://leetcode.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <FaCode className="text-2xl mr-2" />
          <span className="hidden md:inline">LeetCode</span>
        </a>
        <a 
          href="https://codeforces.com/profile/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <SiCodeforces className="text-2xl mr-2" />
          <span className="hidden md:inline">Codeforces</span>
        </a>
        <a 
          href="https://www.codechef.com/users/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <SiCodechef className="text-2xl mr-2" />
          <span className="hidden md:inline">CodeChef</span>
        </a>
        <a 
          href="https://www.geeksforgeeks.org/user/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-4 text-white hover:text-gray-200 transition-colors flex items-center"
        >
          <SiGeeksforgeeks className="text-2xl mr-2" />
          <span className="hidden md:inline">GFG</span>
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
