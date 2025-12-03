import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/projects';

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;