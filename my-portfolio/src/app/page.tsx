import React from "react";
import ProfileCard from "@/components/ProfileCard";
import NavBar from "@/components/NavBar";

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
      <aside className="w-full h-full md:w-63 md:h-98 lg:w-72 lg:h-112 md:sticky top-16 md:top-32 lg:top-40 order-first">
        <ProfileCard />
      </aside>

      {/* Center Column: Main Content */}
      {/* `flex-grow` allows this column to take up the remaining space */}
      {/* `w-full md:flex-1` ensures it takes available space on medium screens and up */}
      {/* `overflow-y-auto` is not strictly needed here if the page itself scrolls, but good if this section itself needs to scroll independently.
          The main page scroll will handle the content overflow.
      */}
      <main className="flex-grow w-full md:flex-1 md:order-none">
        <MainContent />
      </main>

      {/* Right Column: Navigation Bar */}
      {/* `w-full md:w-56 lg:w-64 xl:w-72` sets responsive widths */}
      {/* `sticky top-4 md:top-6 lg:top-8` makes it sticky */}
      {/* `self-start` aligns it to the top of the flex container */}
      <aside className="w-full md:w-20 lg:w-20 xl:w-20 sticky top-30 md:top-50 lg:top-70 self-start">
        <NavBar />
      </aside>
    </div>
  );
};

export default PortfolioPage;
