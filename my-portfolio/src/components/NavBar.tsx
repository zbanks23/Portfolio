// NavBar.tsx
import React from "react";
import {
  House,
  BrainCog,
  BriefcaseBusiness,
  FolderGit2Icon,
  Send, // Added for Contact section
} from "lucide-react";

interface NavBarProps {
  sectionIds: string[]; // e.g., ['home', 'about', 'skills', ...]
  activeSectionId: string; // The ID of the currently visible section
  onNavigate: (sectionId: string) => void; // Function to call when an icon is clicked
}

// Configuration for each navigation item
// Ensure the keys here match the `sectionIds` array passed in props
const navItemsConfig: {
  [key: string]: { icon: React.JSX.Element; name: string };
} = {
  home: { icon: <House size={24} />, name: "Home" },
  skills: { icon: <BrainCog size={24} />, name: "Skills" },
  experience: { icon: <BriefcaseBusiness size={24} />, name: "Experience" },
  projects: { icon: <FolderGit2Icon size={24} />, name: "Projects" },
  contact: { icon: <Send size={24} />, name: "Contact" }, // Added Contact
};

const NavBar: React.FC<NavBarProps> = ({
  sectionIds,
  activeSectionId,
  onNavigate,
}) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl h-full flex flex-col items-center justify-center">
      <ul className="space-y-5 md:space-y-6">
        {sectionIds.map((id) => {
          const item = navItemsConfig[id];
          // If a sectionId is passed that isn't in our config, skip rendering it.
          if (!item) {
            console.warn(
              `NavBar: No configuration found for section ID "${id}"`
            );
            return null;
          }

          return (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                title={item.name}
                aria-label={`Go to ${item.name} section`}
                className={`p-3 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-blue-500 
                  ${
                    activeSectionId === id
                      ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900 scale-110 shadow-md"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-300 hover:scale-105"
                  }
                `}
              >
                {item.icon}
              </button>
            </li>
          );
        })}
      </ul>
      {/* You can add other items like a Theme Toggle here if needed */}
      {/* e.g., <ThemeToggleButton /> */}
    </nav>
  );
};

export default NavBar;

// Example: If you decide to add a theme toggle button
// import { Sun, Moon } from 'lucide-react';
// const ThemeToggleButton = () => {
//   // Replace with your actual theme toggle logic (e.g., from next-themes)
//   const [isDark, setIsDark] = React.useState(false);
//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <button
//       onClick={toggleTheme}
//       title="Toggle theme"
//       aria-label="Toggle theme"
//       className="mt-auto p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-blue-500"
//     >
//       {isDark ? <Sun size={24} /> : <Moon size={24} />}
//     </button>
//   );
// };
