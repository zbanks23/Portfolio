import React from "react";
import Projects from "./Projects";
import Image from "next/image";
import ProfilePic from "../../public/ProfilePic.jpg";

const AboutSection: React.FC = () => (
  <>
    {/* About Section */}
    <section className="h-screen flex flex-col sticky top-0">
      <div className="flex flex-row w-full">
        <div className="bg-gray-900 border-6 rounded-t-2xl border-b-0 border-white w-1/4 h-20 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold">
          About
        </div>
      </div>
      <div className="bg-gray-900 w-full border-6 rounded-tr-2xl border-white flex-grow">
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
              {/* Social Media Icons Placeholder */}
              <div className="flex flex-row items-center space-x-3 mt-4 justify-center">
                <a href="#" className=" text-gray-400 hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-gray-300 mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold leading-loose">
              Hi, I am an Innovator.
            </h2>
            <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl leading-relaxed">
              I am an aspiring Software Engineer and Machine Learning Engineer.
              As a rising 3rd-year Computer Science student at the University of
              Florida, I thrive on creating good solutions and solving
              challenging real world problems. My expertise spans multiple
              programming languages, NextJS, and multiple python libraries,
              allowing me to build effective and innovative solutions. Always
              eager to learn and grow, happy to connect with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ExperienceSection: React.FC = () => (
  <>
    {/* Experience Section */}
    <section className="h-screen flex flex-col sticky top-0">
      <div className="flex flex-row w-full">
        <div className="w-1/4 opacity-0"></div>
        <div className="bg-gray-900 border-6 rounded-t-2xl border-b-0 border-white w-1/4 h-20 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold">
          Experience
        </div>
      </div>
      <div className="bg-gray-900 border-6 rounded-t-2xl border-white flex-grow">
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
              Society of Asian Scientist and Engineers | August 2024 - April
              2025
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
              <li>
                Collaborated with board members to coordinate the Mentor Mentee
                Event that resulted in over 80 participants
              </li>
              <li>
                Spearheaded the storyline development for the Mentor Mentee
                event that resulted in overwhelming satisfaction
              </li>
              <li>
                Organized a cultural event that raised awareness of Asian
                cultures using fun culture specific mini-games
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

const SkillsSection: React.FC = () => (
  <>
    {/* Skills Section */}
    <section className="h-screen flex flex-col sticky top-0">
      <div className="flex flex-row w-full">
        <div className="opacity-0 w-1/2"></div>
        <div className="bg-gray-900 border-6 rounded-t-2xl border-white border-b-0 w-1/4 h-20 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold">
          Skills
        </div>
      </div>
      <div className="bg-gray-900 border-6 rounded-t-2xl border-white p-4 sm:p-6 md:p-10 flex-grow">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "Git",
            "Python",
            "C++",
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
    </section>
  </>
);

const ContactSection: React.FC = () => (
  <>
    {/* Contact Section */}
    <section className="bg-gray-900 h-screen">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Feel free to reach out! Whether you have a question or just want to
          say hi, I will try my best to get back to you!
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
);

const MainContent: React.FC = () => (
  <main className="w-3/4 md:w-2/3 m-auto">
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    {/* Projects Section */}
    <section className=" h-screen flex flex-col sticky top-0">
      <div className="flex flex-row w-full">
        <div className="opacity-0 w-3/4"></div>
        <div className="bg-gray-900 border-6 rounded-t-2xl border-white border-b-0 w-1/4 h-20 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold ml-auto">
          Projects
        </div>
      </div>
      <div className="bg-gray-900 border-6 rounded-tl-2xl border-white flex-grow">
        <div className="grid grid-cols-3 gap-5 auto-rows-fr p-4 sm:p-6 md:p-10 h-4/5">
          <Projects />
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} Zhicheng Li
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default MainContent;
