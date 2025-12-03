import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does interior design cost?',
      answer: 'Our interior design costs vary based on project scope, size, and requirements. We offer flexible packages: Budget-Friendly (₹500-1000/sq ft), Mid-Range (₹1000-1500/sq ft), and Premium (₹1500-3000/sq ft). Contact us for a detailed quote tailored to your specific needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines depend on size and complexity. A 2BHK apartment typically takes 1.5-2 months, a 3BHK takes 2-3 months, and larger projects or commercial spaces may take 3-6 months. We provide a detailed timeline after the initial consultation and always strive to complete projects on schedule.'
    },
    {
      question: 'Do you work outside Gujarat?',
      answer: 'Yes! While we\'re based in Gujarat and primarily serve Ahmedabad, Surat, Vadodara, and Rajkot, we offer remote consultation and 3D design services for clients anywhere in India. For projects outside Gujarat, we can provide complete 3D visualization and coordinate with local contractors for execution.'
    },
    {
      question: 'What\'s included in 3D design visualization?',
      answer: '3D visualization includes detailed renders of all rooms, 360-degree views, photorealistic materials and finishes, lighting simulation, furniture placement, and multiple design options. You\'ll see exactly how your space will look before any construction begins, allowing you to make informed decisions and request changes.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We follow a milestone-based payment structure: 30% advance upon project confirmation, 30% after design approval and material selection, 30% during execution midpoint, and 10% upon project completion. This ensures transparency and allows you to track progress at every stage.'
    },
    {
      question: 'Do you provide warranties or after-sales service?',
      answer: 'Yes, we provide a 1-year warranty on all workmanship and execution. We also offer complimentary after-sales support for minor adjustments within 3 months of project completion. For furniture and fixtures, manufacturer warranties apply.'
    },
    {
      question: 'Can I see work in progress?',
      answer: 'Absolutely! We believe in complete transparency. You\'ll receive regular photo and video updates throughout the project. You\'re welcome to visit the site anytime, and we schedule formal review meetings at key milestones to ensure everything meets your expectations.'
    },
    {
      question: 'Do you help with furniture and décor sourcing?',
      answer: 'Yes, we offer complete furniture and décor sourcing as part of our service. We have partnerships with trusted vendors and can provide both custom-made and ready-made options to match your design and budget. We handle everything from selection to delivery and installation.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Got questions? We've got answers. Can't find what you're looking for? Contact us!
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-orange-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help! Get in touch with our team for personalized answers.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;