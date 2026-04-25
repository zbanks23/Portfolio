"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface SkillCategory {
  label: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    color: "#818cf8",
    skills: ["TypeScript", "Python", "C++", "C#", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "Frameworks",
    color: "#a78bfa",
    skills: ["Next.js", "React / React Native", "Expo", "Flask", "TailwindCSS / NativeWind"],
  },
  {
    label: "Data & ML",
    color: "#34d399",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
  },
  {
    label: "Developer Tools",
    color: "#f472b6",
    skills: ["Git", "VS Code", "Jupyter Notebook", "Figma", "Turborepo", "Supabase", "PyCharm", "CLion", "Unity 6"],
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu size={20} className="text-[var(--gradient-start)]" />
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--gradient-start)]">
              Skills
            </p>
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted-foreground)]">
                  {cat.label}
                </h3>
              </div>

              <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariant}
                    className="skill-pill"
                    style={
                      {
                        "--hover-color": cat.color,
                      } as React.CSSProperties
                    }
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
