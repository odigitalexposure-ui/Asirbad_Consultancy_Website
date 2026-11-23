import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ConsultantPreview from '../components/home/ConsultantPreview';
import ContactCTA from '../components/home/ContactCTA';
import LocationPreview from '../components/home/LocationPreview';

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Introduction to Asirbad Consultancy */}
      <AboutPreview onNavigate={onNavigate} />

      {/* 3. Services Overview */}
      <ServicesPreview onNavigate={onNavigate} />

      {/* 4. Why Choose Asirbad Consultancy */}
      <WhyChooseUs />

      {/* 5. Consultant Introduction */}
      <ConsultantPreview onNavigate={onNavigate} />

      {/* 6. Contact CTA */}
      <ContactCTA onNavigate={onNavigate} />

      {/* 7. Location Preview */}
      <LocationPreview onNavigate={onNavigate} />
    </div>
  );
}
