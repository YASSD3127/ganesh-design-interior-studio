import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// import RealTimeUpdates from './components/RealTimeUpdates';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import DesignProcess from './components/DesignProcess';
import { FeaturedVideos } from './components/VideoSection';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyQuoteButton from './components/StickyQuoteButton';
import ProjectDetail from './pages/ProjectDetail';
import AllProjects from './pages/AllProjects';
import AllVideos from './pages/AllVideos';

// Home Page Component
const HomePage = () => {
  return (
    <>
      {/* <RealTimeUpdates /> */}
      <Navigation />
      <Hero />
      <Portfolio />
      <BeforeAfter />
      <WhyChooseUs />
      <Services />
      <DesignProcess />
      <FeaturedVideos />
      <Testimonials />
      <About />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <StickyQuoteButton />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-videos" element={<AllVideos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;