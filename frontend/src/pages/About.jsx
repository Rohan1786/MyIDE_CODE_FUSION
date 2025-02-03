import React from 'react';
import Navbar from '../components/Navbar';
import { FaUserCog, FaCode, FaCloud } from 'react-icons/fa'; // For icons
import { motion } from 'framer-motion'; // For smooth animations

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className='hero bg-[#141414] text-white text-center py-20'>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h1 className='text-4xl font-bold mb-4'>Welcome to Code Fusion</h1>
          <p className='text-lg max-w-xl mx-auto'>
            A powerful web-based IDE designed to streamline your coding experience. 
            Build, test, and deploy your projects all in one place.
          </p>
        </motion.div>
      </div>

      {/* Key Features Section */}
      <div className="features py-16 bg-[#1A1919] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="feature-item bg-[#222] p-6 rounded-lg shadow-lg hover:bg-[#333] cursor-pointer"
            >
              <FaUserCog className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
              <p>Code Fusion is designed to be intuitive and easy to use, making it accessible for developers of all skill levels.</p>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="feature-item bg-[#222] p-6 rounded-lg shadow-lg hover:bg-[#333] cursor-pointer"
            >
              <FaCode className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Collaboration</h3>
              <p>Work together with your team in real time, making coding faster and more collaborative.</p>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="feature-item bg-[#222] p-6 rounded-lg shadow-lg hover:bg-[#333] cursor-pointer"
            >
              <FaCloud className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud-Based Storage</h3>
              <p>All your projects are securely saved in the cloud, ensuring you can access them anywhere, anytime.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta bg-[#141414] text-white text-center py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Coding?</h2>
          <p className="text-lg mb-4">Join thousands of developers who trust Code Fusion for their projects. Start coding today!</p>
          <a href="/signUp" className="btnBlue bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">Sign Up Now</a>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-[#1A1919] text-white py-8 text-center">
        <p>© 2025 Code Fusion. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default About;
