"use client";
import React from "react";

interface TagsProps {
  tags: string[];
  id: string | number;
}

const Tags: React.FC<TagsProps> = ({ tags = [], id }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={`${id}-${index}`}
          className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-[11px] font-bold tracking-wider py-1.5 px-4 uppercase border border-transparent dark:border-slate-700 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;