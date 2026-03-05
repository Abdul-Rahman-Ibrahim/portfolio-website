"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CardIcons from "./CardIcons";
import { BlogItem } from "@/contexts/Types";
import { useTheme } from "@/contexts/ThemeContext";

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

interface CardItemProps {
  item: BlogItem;
}

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dynamic Theme Classes
  const cardBg = isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const titleText = isDark ? "text-white" : "text-slate-900";
  const bodyText = isDark ? "text-slate-400" : "text-slate-600";
  const footerBorder = isDark ? "border-slate-800" : "border-slate-100";

  const imageSrc = typeof item.image === "string" ? item.image : item.image.src;

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 shadow-sm hover:shadow-2xl ${cardBg}`}
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        {/* Subtle Overlay */}
        <div className={`absolute inset-0 z-10 transition-colors duration-500 ${isDark ? "bg-purple-900/10" : "bg-blue-900/5"} group-hover:bg-transparent`} />
        
        <Image
          src={imageSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-purple-500 ${titleText}`}>
          {item.title}
        </h3>
        
        <p className={`text-sm leading-relaxed line-clamp-3 mb-6 transition-colors duration-500 ${bodyText}`}>
          {item.description}
        </p>

        {/* Footer Section */}
        <div className={`mt-auto pt-4 border-t border-dashed flex justify-between items-center transition-colors duration-500 ${footerBorder}`}>
          <CardIcons item={item} />
          
          <a 
            href={item.links[0]?.url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isDark ? "text-purple-400 hover:text-white" : "text-blue-950 hover:text-purple-600"
            }`}
          >
            Details →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CardItem;