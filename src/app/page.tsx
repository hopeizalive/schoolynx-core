"use client";

import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import WhySchoolynx from '../components/WhySchoolynx';
import Modules from '../components/Modules';
import PerfectSystem from '../components/PerfectSystem';
import MobileAppSection from '../components/MobileAppSection';
import IntegrationOptionsSection from '../components/IntegrationOptionsSection';
import FAQCarouselSection from '@/components/FAQCarouselSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhySchoolynx />
      <Modules />
      <PerfectSystem />
      <MobileAppSection />
      <IntegrationOptionsSection />
      <Features />
      <FAQCarouselSection/>
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}