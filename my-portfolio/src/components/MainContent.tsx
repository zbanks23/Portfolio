import React from "react";

interface MainContentProps {
  activeSectionId: string;
  sectionIds: string[];
  cssTransitionDuration: number; // in ms
}

const InnerContent: React.FC = () => (
  <>
    {/* Home Section */}
    <section
      id="home"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 text-center md:text-left">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I'm An innovator.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I'm an aspiring Software Engineer, and Machine Learning Engineer. As a
          3rd-year Computer Science student at the University of Florida, I
          thrive on creating good solutions and solving challenging real world
          problems. My expertise spans multiple programming languages, NextJS,
          and multiple python libraries, allowing me to build effective and
          innovative solutions. Always eager to learn and grow, I believe in
          never ending education.
        </p>
      </div>
    </section>

    {/* Skills Section */}
    <section
      id="skills"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-8 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
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
            "Python",
            "Java",
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

    {/* Experience Section */}
    <section
      id="experience"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-gray-100 mb-8 text-center md:text-left">
          Experience/Professional Development
        </h2>
        <div className="border-l-2 border-blue-400 pl-6 space-y-10 relative">
          {/* Experience Item 1 */}
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-gray-900"></div>
            <h3 className="text-xl font-medium text-white">
              Director of Finance
            </h3>
            <p className="text-gray-400">GatorTech | April 2025 - Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 ml-2">
              <li>
                Developed and maintained web applications using React and
                Node.js.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                software.
              </li>
              <li>
                Contributed to the design and architecture of new features.
              </li>
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
              <li>Assisted in the development of client websites.</li>
              <li>Participated in code reviews and testing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section
      id="projects"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mr-28 2xl:ml-0 2xl:mr-0">
          {/* Project Card 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium text-white">Project Title 1</h3>
            <p className="text-gray-400 mt-2">
              Short description of the project. Highlight key technologies and
              your role.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              View Project
            </a>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-medium text-white">Project Title 2</h3>
            <p className="text-gray-400 mt-2">
              Another project description. Focus on impact and challenges
              overcome.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section
      id="contact"
      className="h-screen w-full flex flex-col justify-center items-center p-8 bg-gray-900"
    >
      <div className="max-w-xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Feel free to reach out! Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
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
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} Your Name
          </p>
        </div>
      </div>
    </section>
  </>
);

const MainContent: React.FC<MainContentProps> = ({
  activeSectionId,
  sectionIds,
  cssTransitionDuration,
}) => {
  const activeIndex = sectionIds.indexOf(activeSectionId);

  return (
    <div
      className="h-full w-full"
      style={{
        transform: `translateY(-${activeIndex * 100}vh)`,
        transition: `transform ${cssTransitionDuration}ms ease-in-out`,
      }}
    >
      <InnerContent />
    </div>
  );
};

export default MainContent;
