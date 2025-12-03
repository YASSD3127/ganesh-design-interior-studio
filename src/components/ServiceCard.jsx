import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col" style={{
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    }}>
      <div className="text-center flex-1 flex flex-col">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;