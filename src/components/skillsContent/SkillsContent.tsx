"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import skillsConfig from "../../assets/configs/skillsConfig";
import SkillsItems from "./SkillsItems";
import { useTheme } from "@/contexts/ThemeContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const SkillsContent: React.FC = () => {
  const { theme } = useTheme();
  
  // Your specific theme variables
  const lightBg = "bg-slate-50 text-black";
  const darkbg = "bg-gray-950 text-white";
  const themebg = theme === "light" ? lightBg : darkbg;

  return (
    <section id="skills" className={`py-11 md:py-20 pb-40 px-6 transition-colors duration-500 ${themebg}`}>
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* --- MAIN SKILLS SECTION --- */}
        <div className="space-y-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Main <span className="text-purple-600">Skills & Tools</span>
            </h2>
            <div className="h-1.5 w-20 bg-purple-600 rounded-full" />
            {/* <p className="text-slate-500 dark:text-gray-400 max-w-lg font-medium">
              The core technologies I use daily to build high-performance, scalable web applications.
            </p> */}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <SkillsItems config={skillsConfig.mainSkills} />
          </motion.div>
        </div>

        {/* --- COMPLEMENTARY SKILLS SECTION --- */}
        <div className="space-y-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headingVariants}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Complementary <span className="text-emerald-500">Toolkit</span>
            </h2>
            <div className="h-1.5 w-20 bg-emerald-500 rounded-full" />
            {/* <p className="text-slate-500 dark:text-gray-400 max-w-lg font-medium">
              Additional tools and libraries that support my development workflow and project management.
            </p> */}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <SkillsItems config={skillsConfig.complementarySkills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsContent;