"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "MySuite",
    description:
      "A scalable React Native monorepo (Turborepo) with Expo-SQLite and Apple HealthKit for workout tracking. Features 30+ test suites, offline persistence, and a premium NativeWind UI with haptic gestures.",
    image: "/mysuite.png",
    tags: ["Turborepo", "Expo", "React Native", "Supabase", "Jest"],
    href: "https://github.com/zbanks23",
    github: "https://github.com/zbanks23",
    featured: true,
  },
  {
    title: "ARTichokeee",
    description:
      "A full-stack art discovery platform with Next.js/Supabase and a Flask API for JWT verification and secure media uploads. Server-side resolvers map user identities and serialize artwork data.",
    image: "/stock-price.jpg",
    tags: ["Next.js", "Flask", "Supabase", "JWT"],
    href: "https://github.com/zbanks23",
    github: "https://github.com/zbanks23",
  },
  {
    title: "KitchenChaos",
    description:
      "A cooking game built in Unity 6 with modular C# systems using event-driven architecture for global state management. Features customer AI loops, dynamic scoring, and interactive serving logic.",
    image: "/minesweeper.jpg",
    tags: ["Unity 6", "C#", "Git LFS", "Game Dev"],
    href: "https://github.com/zbanks23",
    github: "https://github.com/zbanks23",
  },
  {
    title: "DecoGator",
    description:
      "An interior design simulator created during a Design-A-Thon. Progressed from low-fi wireframes to high-fi mockups and a fully interactive Figma prototype within a 24-hour sprint.",
    image: "/Scheduleify.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    href: "https://github.com/zbanks23",
  },
  {
    title: "Schedulify",
    description:
      "A course scheduling engine integrating the UF public API to automate conflict-free timetable generation. Benchmarked Greedy vs Backtracking algorithms for optimal schedule generation speed.",
    image: "/Scheduleify.png",
    tags: ["Flask", "JavaScript", "Algorithms"],
    href: "https://github.com/tjwz1/Scheduleify",
    github: "https://github.com/tjwz1/Scheduleify",
  },
  {
    title: "Iris Flower Classification",
    description:
      "Predicted Iris flower species with 100% accuracy using KNN, Linear Regression, and SVM. Visualized petal length/width relationships with Pandas, Matplotlib, and Seaborn.",
    image: "/Purple-Iris-Flower-Growing-in-the-Garden.jpg",
    tags: ["Python", "Scikit-Learn", "Machine Learning"],
    href: "https://github.com/zbanks23/Iris_Flower_Classification",
    github: "https://github.com/zbanks23/Iris_Flower_Classification",
  },
  {
    title: "Google Stock Analysis",
    description:
      "Exploratory data analysis on Google (GOOGL) stock prices — compared daily volume with price changes using Pandas, Matplotlib, and Seaborn on Kaggle data.",
    image: "/stock-price.jpg",
    tags: ["Python", "Pandas", "Data Analysis"],
    href: "https://github.com/zbanks23/Google-Stock-Analysis",
    github: "https://github.com/zbanks23/Google-Stock-Analysis",
  },
  {
    title: "Minesweeper",
    description:
      "A modern Minesweeper with C++ and SFML. Features a timer function tracking game duration and a leaderboard system ranking the top 5 fastest times.",
    image: "/minesweeper.jpg",
    tags: ["C++", "SFML", "Game Dev"],
    href: "https://github.com/zbanks23/Minesweeper",
    github: "https://github.com/zbanks23/Minesweeper",
  },
  {
    title: "Sudoku",
    description:
      "A classic Sudoku game recreated with Pygame in a team of 4. Utilized Git for collaborative development and implemented visuals using the Pygame library.",
    image: "/Sudoku_Puzzle.png",
    tags: ["Python", "Pygame", "Git"],
    href: "https://github.com/zbanks23/Sudoku",
    github: "https://github.com/zbanks23/Sudoku",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`project-card group block ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative w-full h-full min-h-[220px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover project-image"
          sizes={project.featured ? "66vw" : "33vw"}
        />

        {/* Always-visible title strip (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="project-overlay">
          <div className="flex-1" />
          <p className="text-sm text-gray-300 mb-3 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-[var(--gradient-start)] font-medium">
              <ExternalLink size={12} />
              View Project
            </span>
            {project.github && (
              <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                <Github size={12} />
                Source
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <FolderOpen
              size={20}
              className="text-[var(--gradient-start)]"
            />
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--gradient-start)]">
              Projects
            </p>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            From full-stack platforms and mobile apps to game engines and ML
            experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[220px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
