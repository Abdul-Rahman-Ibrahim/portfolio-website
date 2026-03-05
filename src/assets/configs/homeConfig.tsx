import React from "react";
// import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
  greeting: (
    <h1 className="text-3xl md:text-4xl uppercase">
      I&apos;m {" "}
      <strong className="text-orange-300 font-serif">
        Abdul-Rahman Ibrahim
      </strong>
    </h1>
  ),
  titles: [
    "Nanoelectronics & Neuromorphic Computing Researcher",
    "AI & Machine Learning Engineer",
    "Software Engineer",
  ],
  about: {
    start:
      "I am a PhD engineering student at Koç University working on Physical Reservoir Computing using Graphene Field Effect Transistors (GFETs), nanomaterials, and nanotechnology fabrication to optimize next-generation computing systems for artificial intelligence. My research focuses on hardware-efficient AI, neuromorphic computing, and integrating novel materials into intelligent systems.",
    exit:
      "Previously, I worked as a researcher and engineer at Beko where I optimized internal software systems, developed machine learning solutions for product analysis, and built a centralized dashboard that hosts optimization tools now used by employees globally. I am proficient in Python, MATLAB, C/C++, and modern AI frameworks.",
  },
  workTimeline: [
    {
      id: "work-5",
      title: "PhD Student",
      company: "Koc University",
      description:
        "Researching Physical Reservoir Computing using Graphene Field Effect Transistors (GFETs), nanomaterials, and nanotechnology fabrication to develop energy-efficient computing systems for artificial intelligence. My work focuses on neuromorphic computing, biosensors, and integrating novel hardware architectures with machine learning.",
      date: "2025-Present",
      icon: <BiRocket />,
      tags: ["ml", "ai", "python", "engineering", "research"],
    },
    {
      id: "work-4",
      title: "AI Researcher / Engineer",
      company: "Beko",
      description:
        "Developed mathematical models and machine learning tools to analyze product complexity and optimize internal engineering workflows. Built a centralized dashboard that integrates optimization tools used by teams globally. Designed CNN models for automated fault detection in home appliances and implemented systems for product configuration analysis and decision support.",
      date: "2023-2025",
      icon: <BiRocket />,
      tags: ["ml", "mlops", "python", "cnn", "optimization", "dashboard"],
    },
    {
      id: "work-3",
      title: "AI Intern",
      company: "Carex AI",
      description:
        "Developed deep learning models to estimate heart rate from PPG signals and implemented automated model selection and hyperparameter tuning for vital signs estimation. Applied signal processing techniques including FFT and 1D/2D CNN architectures to clean noise and motion artifacts from physiological signals, while leveraging AWS for scalable AI development.",
      date: "2024-Present",
      icon: <DiCodeigniter />,
      tags: ["ml", "python", "AWS", "signal processing"],
    },
    {
      id: "work-2",
      title: "Software Developer Intern",
      company: "Security and Software Services",
      description:
        "Developed software for fingerprint-based attendance tracking systems and collaborated with a team of four to implement camera-based user identification using computer vision techniques.",
      date: "2023",
      icon: <FaMobileAlt />,
      tags: ["C#", "python", "computer vision"],
    },
    {
      id: "work-1",
      title: "Undergraduate Research Assistant",
      company: "PAWS Lab",
      description:
        "Conducted research analyzing correlations between ECG and SCG signals with body composition features across multiple patients. Contributed to the development of a framework for seizure prediction using EEG signals and machine learning techniques.",
      date: "2022",
      icon: <GiCommercialAirplane />,
      tags: ["ml", "python", "signal processing", "research"],
    },
  ],
};
export default homeConfig;
