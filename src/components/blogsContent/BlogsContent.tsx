"use client";
import React from "react";
import { motion } from "framer-motion";
import blogConfig from "@/assets/configs/blogConfig";
import CardItem from "../Cards/CardItem";
import { useTheme } from "@/contexts/ThemeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const BlogsContent = () => {
  const { theme } = useTheme();
  const themebg = theme === "light" ? "bg-slate-50 text-black" : "bg-gray-950 text-white";

  return (
    <section className={`${themebg} py-7 md:py-12 px-6 pb-40 transition-colors duration-500 min-h-screen`}>
       <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Latest <span className="text-emerald-500">Insights</span>
          </h1>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl text-lg font-medium">
            Writing about software engineering, productivity, and the lessons I&apos;ve learned along the way.
          </p>
        </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {blogConfig.map((item, index) => (
          <CardItem key={item.id || index} item={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default BlogsContent;