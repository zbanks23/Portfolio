"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  location: string;
  roles: {
    title: string;
    dates: string;
    bullets: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "GatorTech",
    location: "Gainesville, FL",
    roles: [
      {
        title: "Director of Finance",
        dates: "April 2025 — Present",
        bullets: [
          "Designed and instructed a 2-part technical workshop on Python fundamentals and Data Visualization for 20+ members, bridging finance and programming concepts",
          "Allocated an operating budget of $2,000+ to support organizational logistics and member retention initiatives",
        ],
      },
    ],
  },
  {
    company: "Society of Asian Scientists and Engineers (SASE)",
    location: "Gainesville, FL",
    roles: [
      {
        title: "SASE Intern",
        dates: "August 2024 — April 2025",
        bullets: [
          "Coordinated the Mentor-Mentee Event resulting in 80+ participants",
          "Spearheaded storyline development for the Mentor-Mentee event achieving 90%+ satisfaction",
          "Organized a cultural event raising awareness of Asian cultures with 50+ participants",
        ],
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase
              size={20}
              className="text-[var(--gradient-start)]"
            />
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--gradient-start)]">
              Experience
            </p>
          </div>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Development</span>
          </h2>
          <p className="section-subtitle">
            Leadership, hackathons, and collaboration experiences that shaped
            my growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line (desktop only) */}
          <div className="hidden md:block timeline-line" style={{ top: 0 }} />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex gap-6 sm:gap-10"
              >
                {/* Dot (desktop) */}
                <div className="hidden md:flex flex-col items-center mt-2">
                  <div className="timeline-dot" />
                </div>

                {/* Card */}
                <div className="glass-card px-8 py-10 sm:px-12 sm:py-12 flex-1">
                  <div className="flex flex-wrap items-baseline gap-4 mb-8">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-[var(--muted-foreground)] font-medium">
                       {exp.location}
                    </span>
                  </div>
                  <div className="space-y-10">
                    {exp.roles.map((role) => (
                      <div key={role.title}>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                          <span className="text-lg font-medium text-[var(--foreground)]">
                            {role.title}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                            <Calendar size={14} />
                            {role.dates}
                          </span>
                        </div>
                        <ul className="space-y-5">
                          {role.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex gap-4 text-base text-[var(--muted-foreground)] leading-loose max-w-4xl"
                            >
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--gradient-start)] flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
