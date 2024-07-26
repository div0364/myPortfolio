import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-600 to-transparent opacity-70"></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <TypingEffect
            text={["Divyam Sinha"]}
            speed={80}
            eraseSpeed={50}
            eraseDelay={2000}
            cursorRenderer={cursor => <span className="text-yellow-400">{cursor}</span>}
            displayTextRenderer={(text) => (
              <span className="text-black">{text}</span> // Set text color to black
            )}
          />
        </motion.h2>
        <motion.p
          className="text-lg sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A passionate developer creating amazing web experiences with a keen interest in technology and problem-solving.
        </motion.p>
        <motion.div
          className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Leetcode: 1400+ Rating, Solved 450+ Problems</p>
          <p>GeeksforGeeks and CodingNinjas: Solved 250+ Problems</p>
          <p>Codeforces: Max Rating 1267</p>
          <p>Codechef: Max Rating 1497</p>
        </motion.div>
        <motion.div
          className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">INTERESTS</h3>
          <ul className="list-disc list-inside">
            <li>Competitive Programming</li>
            <li>Data Structure and Algorithm</li>
            <li>Web Development (MERN STACK)</li>
            <li>Problem Solving</li>
          </ul>
        </motion.div>
        <motion.a
          href="#contact"
          className="mt-8 py-3 px-6 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
