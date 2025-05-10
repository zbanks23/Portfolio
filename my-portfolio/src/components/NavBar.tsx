import React from "react";
import {
  House,
  BrainCog,
  BriefcaseBusiness,
  FolderGit2Icon,
} from "lucide-react";

const NavBar: React.FC = () => {
  return (
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
};

export default NavBar;
