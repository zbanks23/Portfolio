// NavBar.tsx
import React from "react";
import {
  House,
  BrainCog,
  BriefcaseBusiness,
  FolderGit2Icon,
  Send,
} from "lucide-react";

interface NavBarProps {
  sectionIds: string[];
  activeSectionId: string;
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
  contact: { icon: <Send size={24} />, name: "Contact" },
};

const NavBar: React.FC<NavBarProps> = ({
  sectionIds,
  activeSectionId,
  onNavigate,
}) => {
  return (
    <nav className="bg-transparent h-full flex flex-col items-center justify-center">
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
                className={`p-3 rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 
                  ${
                    activeSectionId === id
                      ? "bg-blue-400 text-gray-900 scale-110 shadow-md"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-blue-300 hover:scale-105"
                  }
                `}
              >
                {item.icon}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
