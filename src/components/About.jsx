import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../asserts/photo3.jpg'; // Updated path

const About = () => {
  return (
    <section id="about" className="bg-light-gray py-16 px-4 md:px-8 text-center text-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-dark-gray"
          />
        </div>

        <motion.p
          className="text-lg max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello! I'm Divyam Sinha, a passionate developer with experience in creating web applications. I have a strong background in competitive programming and a keen interest in problem-solving.
        </motion.p>

        {/* Education and Achievements */}
        <div className="text-left max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr>
                <th className="border p-2">Degree/Certificate</th>
                <th className="border p-2">Institute/Board</th>
                <th className="border p-2">CGPA/Percentage</th>
                <th className="border p-2">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">B.Tech. Artificial Intelligence and Machine Learning</td>
                <td className="border p-2">Birla Institute of Technology, Mesra</td>
                <td className="border p-2">7.99 (Absolute)</td>
                <td className="border p-2">2022-Present</td>
              </tr>
              <tr>
                <td className="border p-2">Senior Secondary</td>
                <td className="border p-2">Mithila Academy Public School, Bokaro</td>
                <td className="border p-2">80.4%</td>
                <td className="border p-2">2021</td>
              </tr>
              <tr>
                <td className="border p-2">Secondary</td>
                <td className="border p-2">Dav Public School, Sawang</td>
                <td className="border p-2">95.2%</td>
                <td className="border p-2">2019</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
          <ul className="list-disc list-inside text-left">
            <li>Achieved a rank of 10 in the IEEE recruitment contest among over 100+ students.</li>
            <li>Awarded to top 6.9 percentage of leetcoders solving problems 50+ days in 2024.</li>
            <li>Achieved a rank of 1327 out of 1 lakh students in WBJEE (West Bengal Joint Entrance Examination).</li>
            <li>Awarded a Rs.12,600 scholarship from the Central Coalfields Limited Fund Society for the year [2023], recognizing academic excellence and community involvement.</li>
            <li>Awarded to top 6.9 percentage of leetcoders solving problems 50+ days in 2023.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
