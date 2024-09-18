import React from 'react';
import NavigationBar from './Components/NavigationBar';
import './App.css'
import Masthead from './Components/Masthead';
import FeaturesSection from './Components/FeaturesSection';
import ImageShowcasesSection from './Components/Image ShowcasesSection';
import TestimonialsSection from './Components/TestimonialsSection';
import CallToActionSection from './Components/CalltoActionSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Masthead />
      <FeaturesSection />
      <ImageShowcasesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default App;