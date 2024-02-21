import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Welcome from '../Pages/Welcome';
import Gallery from '../Pages/Gallery';
import About from '../Pages/About';
import './PageTransitions.css'; // Import CSS for page transitions
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init({
  duration: 800,
  once: false,
  mirror: false,
});

function LayoutRoutes() {
  const location = useLocation();

  return (
    <div style={{  backgroundImage:"linear-gradient(352deg, rgba(94,224,245,1) 0%, rgba(225,231,86,1) 100%)",
  }}>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Welcome />} />
            <Route path="/frameLaunch" element={<Welcome />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default LayoutRoutes;
