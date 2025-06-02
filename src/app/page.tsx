"use client";

import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import WhyFedena from '../components/WhyFedena';
import Modules from '../components/Modules';
import PerfectSystem from '../components/PerfectSystem';
import MobileAppSection from '../components/MobileAppSection';
import IntegrationOptionsSection from '../components/IntegrationOptionsSection';
import FAQCarouselSection from '@/components/FAQCarouselSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Stats />
        <WhyFedena />
        <Modules />
        <PerfectSystem />
        <MobileAppSection />
        <IntegrationOptionsSection />
        <Features />
        <FAQCarouselSection/>
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </main>
  );
}