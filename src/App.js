// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Portfolio from './components/Portfolio';
// import BeforeAfter from './components/BeforeAfter';
// import WhyChooseUs from './components/WhyChooseUs';
// import Services from './components/Services';
// import DesignProcess from './components/DesignProcess';
// import { FeaturedVideos } from './components/VideoSection';
// import Testimonials from './components/Testimonials';
// import About from './components/About';
// import FAQ from './components/FAQ';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import StickyQuoteButton from './components/StickyQuoteButton';
// import ProjectDetail from './pages/ProjectDetail';
// import AllProjects from './pages/AllProjects';
// import AllVideos from './pages/AllVideos';
// import AboutDesigner from './pages/AboutDesigner';
// import MaterialLibrary from './pages/MaterialLibrary';
// import AllTransformations from './pages/AllTransformations';
// import BehindTheScenes from './pages/BehindTheScenes';
// import VideoDetail from './pages/VideoDetail';
// import DarkModeToggle from './components/DarkModeToggle';

// // Scroll to top component
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// // Home Page Component
// const HomePage = () => {
//   return (
//     <>
//       {/* <DarkModeToggle /> */}
//       <Navigation />
//       <Hero />
//       <Portfolio />
//       <BeforeAfter />
//       <WhyChooseUs />
//       <Services />
//       <DesignProcess />
//       <FeaturedVideos />
//       <Testimonials />
//       <About />
//       <FAQ />
//       <ContactForm />
//       <Footer />
//       <WhatsAppButton />
//       <StickyQuoteButton />
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/project/:id" element={<ProjectDetail />} />
//           <Route path="/all-projects" element={<AllProjects />} />
//           <Route path="/all-videos" element={<AllVideos />} />
//           <Route path="/about-designer" element={<AboutDesigner />} />
//           <Route path="/materials" element={<MaterialLibrary />} />
//           <Route path="/all-transformations" element={<AllTransformations />} />
//           <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
//           <Route path="/video/:id" element={<VideoDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
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
import AboutDesigner from './pages/AboutDesigner';
import MaterialLibrary from './pages/MaterialLibrary';
import AllTransformations from './pages/AllTransformations';
import BehindTheScenes from './pages/BehindTheScenes';
import VideoDetail from './pages/VideoDetail';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Home Page Component
const HomePage = () => {
  return (
    <>
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
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-videos" element={<AllVideos />} />
          <Route path="/about-designer" element={<AboutDesigner />} />
          <Route path="/materials" element={<MaterialLibrary />} />
          <Route path="/all-transformations" element={<AllTransformations />} />
          <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
