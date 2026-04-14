"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import IntroOverlay from "@/components/IntroOverlay";

export default function PortfolioPage() {
  return (
    <div className="relative z-10">
      <IntroOverlay />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <ContactSection />
    </div>
  );
}
