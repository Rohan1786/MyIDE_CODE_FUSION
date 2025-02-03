// import React from 'react';
// import Navbar from '../components/Navbar';

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <div className='p-6 text-center'>
//         <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
//         <p className='text-lg text-gray-300'>
//           Feel free to reach out to us for any queries or support. 
//         </p>
//         <div className='mt-4'>
//           <p>Email: support@codefusion.com</p>
//           <p>Phone: +123 456 7890</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Smooth animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null); // For form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission success
    setFormStatus("Form submitted successfully! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />

      {/* Contact Section */}
      <div className="contact-section py-16 bg-[#141414] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold mb-4"
          >
            Contact Us
          </motion.h2>
          <p className="text-lg mb-8">
            Have questions or feedback? Feel free to reach out to us, and we will get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="contact-form max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input-field"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="input-field mt-4"
              required
            ></textarea>
            <button
              type="submit"
              className="btnBlue bg-blue-600 text-white py-3 px-6 rounded-full mt-4 hover:bg-blue-700"
            >
              Send Message
            </button>
          </motion.form>

          {/* Form Status */}
          {formStatus && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-green-500"
            >
              {formStatus}
            </motion.p>
          )}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info py-16 bg-[#1A1919] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="contact-item">
              <FaPhoneAlt className="text-4xl mb-2" />
              <h4 className="text-lg">Phone</h4>
              <p className="text-lg">+1 123-456-7890</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="text-4xl mb-2" />
              <h4 className="text-lg">Email</h4>
              <p className="text-lg">contact@codefusion.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="text-4xl mb-2" />
              <h4 className="text-lg">Address</h4>
              <p className="text-lg">123 Code Street, Tech City</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Integration */}
      <div className="map py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Find Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5862387167247!2d-122.08424938468117!3d37.42206587982488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1f004d2d3f%3A0xe2c7c8e3d65d41fd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1613582909472!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media py-16 bg-[#141414] text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-[#1A1919] text-white py-8 text-center">
        <p>© 2025 Code Fusion. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Contact;
