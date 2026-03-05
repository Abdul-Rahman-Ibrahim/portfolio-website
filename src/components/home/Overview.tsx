"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import homeConfig from "@/assets/configs/homeConfig";
import DynamicTyping from "../DynamicTyping";
import About from "./About";
import { useTheme } from "@/contexts/ThemeContext";

const Timeline = dynamic(() => import("./Timeline/Timeline"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center p-20 animate-pulse text-gray-400">
      Loading Journey...
    </div>
  ),
});

const Overview = () => {
  const { theme } = useTheme();
  const themebg =
    theme === "light" ? "bg-slate-50 text-black" : "bg-gray-950 text-white";

  return (
    <main
      className={`${themebg} min-h-screen transition-colors duration-500 overflow-x-hidden`}
    >
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl md:text-5xl font-bold"
          >
            {homeConfig.greeting}
          </motion.div>

          <div className="text-2xl md:text-4xl font-sans text-purple-600 dark:text-purple-400 h-12">
            <DynamicTyping titles={homeConfig.titles} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <About about={homeConfig.about} />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black/5 dark:bg-white/5 transition-colors">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16 uppercase tracking-widest"
          >
            Professional Experience
          </motion.h2>

          <Timeline items={homeConfig.workTimeline} />
        </div>
      </section>
    </main>
  );
};

export default Overview;
