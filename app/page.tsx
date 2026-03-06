"use client";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
// import Privacy from './components/Privacy';
// import DesktopApp from './components/DesktopApp';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060A]">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
     
      <CTA />
      <Footer /> 

      {/* <HowItWorks />
      
      <Privacy />
      <DesktopApp />
      
      
      <Footer /> */}
    </div>
  );
}
