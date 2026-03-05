"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Skill } from "@/contexts/Types";
import { useTheme } from "@/contexts/ThemeContext";

interface SkillsItemsProps {
  config: Skill[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const SkillsItems: React.FC<SkillsItemsProps> = ({ config }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 list-none p-0">
      {config.map((item) => (
        <motion.li
          key={item.id}
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className={`
            ${item.className}
            group relative flex flex-col items-center justify-center
            p-8 rounded-3xl cursor-default transition-all duration-500
            ${isDark 
                ? "bg-slate-900 border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.3)]" 
                : "bg-white border-slate-100 shadow-sm"
            }
            border hover:border-purple-500/50 hover:shadow-2xl
          `}
        >
          {/* Icon */}
          <div className="relative z-10 text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className={`${isDark ? "text-white" : "text-slate-800"} group-hover:text-purple-500 transition-colors`}>
              {item.icon}
            </span>
          </div>

          {/* Skill Text */}
          <p className={`
            relative z-10 m-0 font-bold text-xs tracking-widest uppercase text-center
            transition-colors duration-300
            ${isDark ? "text-gray-400 group-hover:text-white" : "text-slate-500 group-hover:text-black"}
          `}>
            {item.text}
          </p>

          {/* Glow Effect */}
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl
            bg-linear-to-b ${isDark ? "from-purple-500/10" : "from-purple-500/5"} to-transparent
          `} />
        </motion.li>
      ))}
    </ul>
  );
};

export default SkillsItems;