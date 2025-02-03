import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
