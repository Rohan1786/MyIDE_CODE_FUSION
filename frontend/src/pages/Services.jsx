import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { title: "Web Development", description: "Build modern and responsive websites." },
    { title: "Mobile App Development", description: "Create high-quality mobile applications." },
    { title: "UI/UX Design", description: "Design user-friendly and engaging interfaces." },
    { title: "SEO Optimization", description: "Improve website visibility on search engines." },
    { title: "Digital Marketing", description: "Boost your online presence with marketing strategies." },
    { title: "Coding Practice Platform", description: "An open-source IDE to practice coding with live preview." },
    { title: "Code Collaboration", description: "Collaborate with other developers in real-time." },
    { title: "Version Control Integration", description: "Integrate Git for version control management." }
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 lg:px-16 my-12">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-center lg:text-left text-gray-800 mb-4 lg:mb-0">Our Services</h2>
          <div className="w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Search Services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Our open-source IDE is designed to help developers practice coding easily, collaborate with others, and improve their skills through hands-on experience.
            With powerful features such as live preview, code suggestions, and built-in version control, it’s the ideal environment to write code, test, and experiment with various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))
          ) : (
            <p className="text-center w-full text-xl text-gray-500">No services found</p>
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our Open-Source IDE?</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our open-source IDE is not just another coding tool – it’s a platform designed with developers in mind. Here are some reasons why it’s the best choice for practicing coding:
          </p>
          <ul className="list-disc list-inside text-left mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <li>Live Preview: See your code in action as you write it.</li>
            <li>Multi-Language Support: Work with JavaScript, HTML, CSS, and more.</li>
            <li>Real-Time Collaboration: Collaborate with other developers on projects.</li>
            <li>Built-in Version Control: Integrated Git for smooth version management.</li>
            <li>Lightweight and Fast: The IDE is fast, responsive, and optimized for everyday use.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
