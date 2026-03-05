"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import "react-vertical-timeline-component/style.min.css";
import { TimelineItem } from "@/contexts/Types";
import Tags from "../Tags/Tags";

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items = [] }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <VerticalTimeline lineColor={isDark ? "#334155" : "#000000"} animate={true}>
      {items.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          icon={item.icon}
          contentStyle={{
            background: isDark ? "#111827" : "#ffffff", // gray-900 vs white
            color: isDark ? "#fff" : "#000",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            border: isDark ? "1px solid #1f2937" : "1px solid #f1f5f9",
            borderRadius: "12px"
          }}
          contentArrowStyle={{ 
            borderRight: `12px solid ${isDark ? "#111827" : "#ffffff"}` 
          }}
          iconStyle={{ 
            background: isDark ? "#8a2be2" : "#312e81", 
            color: "#fff", 
            boxShadow: `0 0 0 4px ${isDark ? "#1f2937" : "#fff"}`
          }}
          dateClassName={isDark ? "text-slate-400 font-bold px-4" : "text-slate-900 font-bold px-4"}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold  mb-1">
              {item.title}
            </h3>
            <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-4">
              {item.company}
            </h4>
            <p className=" leading-relaxed">
              {item.description}
            </p>
          
            <div className="mt-6">
               <Tags id={item.id} tags={item.tags} />
            </div>
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;