import Image from "next/image";
import React from "react";
import {
  House,
  BrainCog,
  BriefcaseBusiness,
  FolderGit2Icon,
} from "lucide-react";

// You can replace these with actual components or more detailed placeholders
const ProfileCard: React.FC = () => (
  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
    <div className="flex flex-col items-center">
      {/* Placeholder for an avatar */}
      <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500 dark:text-gray-400"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Your Name
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Your Title / Profession
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p>Location: City, Country</p>
        <p>Email: your.email@example.com</p>
      </div>
      {/* Social Media Icons Placeholder */}
      <div className="flex space-x-3 mt-6">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
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
        <a
          href="#"
          className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
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
        <a
          href="#"
          className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
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
);

const RightNavbar: React.FC = () => (
  <nav className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full">
    <ul className="space-y-6 max-w-max mx-auto">
      <li>
        <a
          href="#home"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          <House />
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          <BrainCog />
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          <BriefcaseBusiness />
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FolderGit2Icon />
        </a>
      </li>
    </ul>
  </nav>
);

const MainContent: React.FC = () => (
  <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
    <h1
      className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
      id="home"
    >
      Welcome to My Portfolio
    </h1>

    {/* About Section Placeholder */}
    <section id="about" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi, I'm Zhicheng Li An innovator
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm an aspiring Software Engineer, and Machine Learning Engineer. As a
        3rd-year Computer Science student at the University of Florida, I thrive
        on creating good solutions and solving challenging real world problems.
        My experise spans multiple programming languages, NextJS, and multiple
        python libraries, allowing me to build effective and innovative
        solutions. Always eager to learn and grow, I believe in never ending
        education.
      </p>
    </section>

    {/* Skills Section Placeholder */}
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {[
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "HTML5",
          "CSS3",
          "Git",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>

    {/* Experience Section Placeholder */}
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Experience
      </h2>
      <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 space-y-8">
        {/* Experience Item 1 */}
        <div className="relative">
          <div className="absolute -left-[34px] top-1 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Software Engineer
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Awesome Company Inc. | Jan 2022 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 ml-2">
            <li>
              Developed and maintained web applications using React and Node.js.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality
              software.
            </li>
            <li>Contributed to the design and architecture of new features.</li>
          </ul>
        </div>
        {/* Experience Item 2 */}
        <div className="relative">
          <div className="absolute -left-[34px] top-1 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Junior Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tech Solutions Ltd. | Jun 2020 - Dec 2021
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 ml-2">
            <li>Assisted in the development of client websites.</li>
            <li>Participated in code reviews and testing.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Projects Section Placeholder */}
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Project Title 1
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Short description of the project. Highlight key technologies and
            your role.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
          >
            View Project
          </a>
        </div>
        {/* Project Card 2 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Project Title 2
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Another project description. Focus on impact and challenges
            overcome.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
          >
            View Project
          </a>
        </div>
        {/* Add more project cards */}
      </div>
    </section>

    {/* Contact Section Placeholder */}
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Contact Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out! Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>

    {/* Filler content to demonstrate scrolling */}
    <div className="h-[1000px] bg-gray-50 dark:bg-gray-800 p-4 rounded mt-8">
      <p className="text-gray-700 dark:text-gray-300">
        Scroll down to see the fixed elements in action...
      </p>
      <p className="mt-[500px] text-gray-700 dark:text-gray-300">
        Still scrolling...
      </p>
    </div>

    {/* Add a theme toggle or other nav items here */}
    <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name
      </p>
    </div>
  </div>
);

const PortfolioPage: React.FC = () => {
  return (
    // Main container for the whole page
    // Uses flex to arrange items and sets a min-height for the screen
    // `dark:bg-gray-950` sets a very dark background for dark mode
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 flex flex-col md:flex-row p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8">
      {/* Left Column: Profile Card */}
      {/* `w-full md:w-1/4 lg:w-1/5` makes it full width on small screens, then 1/4 or 1/5 on larger screens */}
      {/* `sticky top-4 md:top-6 lg:top-8` makes the element sticky to the top with some padding */}
      {/* `h-screen md:h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)]` attempts to set height relative to viewport, adjusting for padding.
          For truly fixed height independent of content, you might need more specific CSS or JS.
          However, for a profile card, allowing its natural height or a max-height might be better.
          Here, `self-start` ensures it doesn't stretch if the main content is taller.
      */}
      <aside className="w-full md:w-64 lg:w-80 xl:w-96 sticky top-4 md:top-6 lg:top-8 self-start">
        {/* The ProfileCard component is placed here */}
        <ProfileCard />
      </aside>

      {/* Center Column: Main Content */}
      {/* `flex-grow` allows this column to take up the remaining space */}
      {/* `w-full md:flex-1` ensures it takes available space on medium screens and up */}
      {/* `overflow-y-auto` is not strictly needed here if the page itself scrolls, but good if this section itself needs to scroll independently.
          The main page scroll will handle the content overflow.
      */}
      <main className="flex-grow w-full md:flex-1 order-first md:order-none">
        {/* The MainContent component is placed here */}
        <MainContent />
      </main>

      {/* Right Column: Navigation Bar */}
      {/* `w-full md:w-56 lg:w-64 xl:w-72` sets responsive widths */}
      {/* `sticky top-4 md:top-6 lg:top-8` makes it sticky */}
      {/* `self-start` aligns it to the top of the flex container */}
      <aside className="w-full md:w-20 lg:w-20 xl:w-20 sticky top-30 md:top-50 lg:top-70 self-start">
        {/* The RightNavbar component is placed here */}
        <RightNavbar />
      </aside>
    </div>
  );
};

export default PortfolioPage;
