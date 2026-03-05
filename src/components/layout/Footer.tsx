"use client";


import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const themebg = theme === "light" ? "bg-slate-50 text-black" : "bg-gray-950 text-white";

  return (
    <footer className={`${themebg} border-t-2 border-slate-200 dark:border-gray-800 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Contact Info */}
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Contact</h2>
            <div className="flex flex-col gap-1 text-slate-600 dark:text-gray-400">
              <p>
                <span className="font-bold  dark:text-white">Email:</span>{" "}
                <a href="mailto:abdulrahmanibrahim.ish@gmail.com" className="hover:text-purple-500 transition-colors">
                  abdulrahmanibrahim.ish@gmail.com
                </a>
              </p>
              <p>
                <span className="font-bold  dark:text-white">Tel:</span>{" "}
                <a href="tel:+233549664077" className="hover:text-purple-500 transition-colors">+233 54 966 4077</a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <AiFillGithub size={30} />, link: "https://github.com/Abdul-Rahman-Ibrahim" },
              // { icon: <AiFillLinkedin size={30} />, link: "https://linkedin.com" },
              { icon: <BsMedium size={30} />, link: "https://medium.com/@abdulrahmanibrahim.ish" },
              { icon: <AiOutlineFacebook size={30} />, link: "https://www.facebook.com/abdulrahman.ibrahim.56232/" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-400 hover:bg-blue-950 dark:hover:bg-purple-600 hover:text-white transition-all shadow-sm hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm font-medium tracking-wide">
            &copy; {currentYear} <span className="text-purple-600">Abdul Rahman</span>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;