/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { BlogItem } from "@/contexts/Types";
import { useTheme } from "@/contexts/ThemeContext";

interface CardIconsProps {
  item: BlogItem;
}

const CardIcons: React.FC<CardIconsProps> = ({ item }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      {item.links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={item.target || "_blank"}
          rel="noopener noreferrer"
          title={link.name}
          className={`
            relative flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg
            ${isDark 
              ? "bg-purple-600 border-slate-900 text-white hover:bg-white hover:text-purple-600" 
              : "bg-blue-950 border-white text-white hover:bg-purple-600"
            }
          `}
        >
          <span className="text-lg">
            {typeof link.icon === 'string' ? (
                <img src={link.icon} className="w-5 h-5 invert dark:invert-0" alt=""/>
            ) : (
                link.icon
            )}
          </span>
        </a>
      ))}
    </div>
  );
};

export default CardIcons;