"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface AboutProps {
  about: { start: string; exit: string; };
}

const About: React.FC<AboutProps> = ({ about }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`
      max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden border transition-all duration-500
      ${isDark ? "border-slate-800 shadow-black/40" : "border-slate-200 shadow-slate-200"}
    `}>
      {/* Terminal Header */}
      <div className={`
        px-6 py-4 flex items-center justify-center transition-colors duration-500
        ${isDark ? "bg-slate-800" : "bg-blue-950"}
      `}>
        <div className="flex gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-md" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-md" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-md" />
        </div>
       
      </div>
      
      {/* Terminal Body */}
      <div className={`
        p-8 md:p-14 text-left transition-colors duration-500
        ${isDark ? "bg-gray-900" : "bg-white"}
      `}>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`
            leading-relaxed text-xl md:text-3xl mb-10 font-light transition-colors duration-500
            ${isDark ? "text-slate-300" : "text-slate-700"}
          `}
        >
          <span className="text-emerald-500 mr-4 font-black select-none">{">"}</span>
          {about.start}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`
            italic font-semibold border-l-4 pl-6 text-lg md:text-2xl transition-colors duration-500
            ${isDark ? "text-purple-400 border-purple-500" : "text-purple-600 border-purple-600"}
          `}
        >
          {about.exit}
        </motion.p>
      </div>
    </div>
  );
};

export default About;