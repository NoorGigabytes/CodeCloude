import React from 'react';
import Navbar from './components/Navbar';
import NavbarHome from './components/NavbarHome';
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Industries from './pages/Industries';
import Process from './pages/Process';
import ScrollToTop from './components/ScrollToTop';
import UXUI from './pages/UXUI';
import SEO from './pages/SEO';
import Web from './pages/Web';
import GraphicDesign from './pages/GraphicDesign';
import MobileDevelopment from './pages/MobileDevelopment';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CustomSoftware from './pages/CustomSoftware';
import SoftwareProduct from './pages/SoftwareProduct';
import Partnership from './pages/Partnership';

function App() {
  const location = useLocation();
  const changeNavbar = location.pathname == '/';
  return (
      <div className="pt-20 selection:bg-yellow-200">
        {changeNavbar ? <NavbarHome /> : <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<About />} />
          <Route path="/industries-we-serve" element={<Industries />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/UX-UI-design" element={<UXUI />} />
          <Route path="/SEO-service" element={<SEO />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/custom-software-development" element={<CustomSoftware />} />
          <Route path="/software-product-development" element={<SoftwareProduct />} />
          <Route path="/partner-with-us" element={<Partnership />} />
          <Route path="/our-blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
