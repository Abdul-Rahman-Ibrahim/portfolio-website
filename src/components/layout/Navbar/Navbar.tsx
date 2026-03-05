"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import menuConfig from "@/assets/Data";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Your Specific Theme Variables
  const lightBg = "bg-slate-50 text-black";
  const darkbg = "bg-gray-950 text-white";
  const themebg = theme === "light" ? lightBg : darkbg;

  return (
    <header
      className={`sticky top-0 left-0 w-full z-100 transition-all duration-500 ${themebg} ${
        scrolled
          ? "py-3 backdrop-blur-xl shadow-lg border-b border-slate-200/20 dark:border-slate-800"
          : "py-4 border-b-2 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="text-2xl font-black tracking-tighter uppercase">
            Portfolio<span className="text-purple-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full border border-black/5 dark:border-white/10 shadow-inner">
          {menuConfig.sidebarData.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`relative px-6 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-2 ${
                  isActive
                    ? "text-white"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-950 dark:bg-purple-600 rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl cursor-pointer transition-all shadow-sm border border-black/10 dark:border-white/10 hover:scale-110 active:scale-95 ${
                theme === 'light' ? 'bg-white text-black' : 'bg-slate-800 text-white'
            }`}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-3 rounded-2xl bg-blue-950 dark:bg-purple-600 text-white shadow-lg transition-transform active:scale-90"
          >
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full md:hidden border-b border-black/10 dark:border-white/10 shadow-2xl overflow-hidden ${themebg}`}
          >
            <div className="px-6 py-10 space-y-3">
              {menuConfig.sidebarData.map((item) => {
                 const isActive = pathname === item.path;
                 return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setNavOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      isActive 
                      ? "bg-blue-950 dark:bg-purple-600 text-white" 
                      : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg font-bold">{item.title}</span>
                  </Link>
                 )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;