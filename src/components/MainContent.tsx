"use client";

import React from "react";
import Projects from "./Projects";
import Image from "next/image";
import ProfilePic from "../../public/ProfilePic.jpg";

interface SectionProps {
  onTabClick: (id: string) => void;
}

const AboutSection: React.FC<SectionProps> = ({ onTabClick }) => (
  <>
    {/* About Section */}
    <div className="bg-gray-900 border-6 rounded-t-2xl border-b-0 border-white w-1/4 h-20 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold sticky top-0 z-1">
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          onTabClick("about");
        }}
      >
        About
      </a>
    </div>
    <div
      id="about"
      className="bg-gray-900 w-full border-6 rounded-tr-2xl border-white h-screen sticky top-20"
    >
      <div className="p-4 sm:p-6 md:p-10">
        <div className="float-left mr-4 sm:mr-6 md:mr-10">
          <Image
            src={ProfilePic}
            alt="A picture of me"
            width={200}
            height={300}
            className="rounded-4xl m-auto"
          />
          <div className="flex flex-col justify-center">
            {/* Placeholder for an avatar */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
              Zhicheng Li
            </h2>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              Computer Science @ UF
            </p>
            <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-300 text-center">
              <p>Location: Gainesville, Florida</p>
              <p>Email: zli5@ufl.edu</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-gray-300 mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold leading-loose">
            Hi, I am an Innovator.
          </h2>
          <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl leading-relaxed">
            I am an aspiring Software Engineer and Machine Learning Engineer. As
            a rising 3rd-year Computer Science student at the University of
            Florida, I thrive on creating good solutions and solving challenging
            real world problems. My expertise spans multiple programming
            languages, NextJS, and multiple python libraries, allowing me to
            build effective and innovative solutions. Always eager to learn and
            grow, happy to connect with you!
          </p>
        </div>
      </div>
    </div>
  </>
);

const ExperienceSection: React.FC<SectionProps> = ({ onTabClick }) => (
  <>
    {/* Experience Section */}
    <div className="bg-gray-900 border-6 rounded-t-2xl border-b-0 border-white w-1/4 h-20 translate-x-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold sticky top-0 bottom-0 z-1">
      <a
        className="leading-6.5"
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          onTabClick("experience");
        }}
      >
        Prof
        <br />
        Dev
      </a>
    </div>
    <div
      id="experience"
      className="bg-gray-900 border-6 rounded-t-2xl border-white h-screen sticky top-20"
    >
      <div className="border-l-2 border-blue-400 pl-6 space-y-10 relative m-4 sm:m-6 md:m-10">
        {/* Experience Item 1 */}
        <div className="relative">
          <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-gray-900"></div>
          <h3 className="text-xl font-medium text-white">
            Director of Finance
          </h3>
          <p className="text-gray-400">GatorTech | April 2025 - Present</p>
          <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* Experience Item 2 */}
        <div className="relative">
          <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-gray-900"></div>
          <h3 className="text-xl font-medium text-white">SASE Interns</h3>
          <p className="text-gray-400">
            Society of Asian Scientist and Engineers | August 2024 - April 2025
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
            <li>
              Collaborated with board members to coordinate the Mentor Mentee
              Event that resulted in over 80 participants
            </li>
            <li>
              Spearheaded the storyline development for the Mentor Mentee event
              that resulted in overwhelming satisfaction
            </li>
            <li>
              Organized a cultural event that raised awareness of Asian cultures
              using fun culture specific mini-games
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

const SkillsSection: React.FC<SectionProps> = ({ onTabClick }) => (
  <>
    {/* Skills Section */}
    <div className="bg-gray-900 border-6 rounded-t-2xl border-white border-b-0 w-1/4 h-20 translate-x-[200%] flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold sticky top-0 bottom-0 z-1">
      <a
        href="#skills"
        onClick={(e) => {
          e.preventDefault();
          onTabClick("skills");
        }}
      >
        Skills
      </a>
    </div>
    <div
      id="skills"
      className="bg-gray-900 border-6 rounded-t-2xl border-white h-screen p-4 sm:p-6 md:p-10 sticky top-20"
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.JS",
          "TailwindCSS",
          "HTML5",
          "CSS3",
          "Git",
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Scikit-Learn",
          "Pygame",
          "Flask",
          "C++",
          "SFML",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-base font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </>
);

const ProjectsSection: React.FC<SectionProps> = ({ onTabClick }) => (
  <>
    <div className="bg-gray-900 border-6 rounded-t-2xl border-white border-b-0 w-1/4 h-20 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ml-auto sticky top-0 bottom-0">
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          onTabClick("projects");
        }}
      >
        Projects
      </a>
    </div>
    <div
      id="projects"
      className="bg-gray-900 border-6 rounded-tl-2xl border-white h-[calc(100vh-80px)] w-full sticky top-20"
    >
      <div className="grid grid-cols-3 gap-5 auto-rows-fr p-4 sm:p-6 md:p-10 h-4/5">
        <Projects />
      </div>
      <div className="mt-10 pt-6 border-t border-gray-700">
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Zhicheng Li
        </p>
      </div>
    </div>
  </>
);

const MainContent: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id == "about")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      else if (id == "experience")
        window.scrollTo({
          top: 998,
          behavior: "smooth",
        });
      else if (id == "skills")
        window.scrollTo({
          top: 1976,
          behavior: "smooth",
        });
      else if (id == "projects")
        window.scrollTo({
          top: 3013,
          behavior: "smooth",
        });
    }
  };

  return (
    <main className="sm:w-3/4 md:w-2/3 m-auto">
      <AboutSection onTabClick={scrollToSection} />
      <ExperienceSection onTabClick={scrollToSection} />
      <SkillsSection onTabClick={scrollToSection} />
      <ProjectsSection onTabClick={scrollToSection} />
    </main>
  );
};

export default MainContent;
