import { ReactNode } from 'react';

export interface BlogLink {
    name: string;
    url: string;
    icon: ReactNode;
}

export interface BlogItem {
  id: string | number;
  title: string;
  links: { name: string; url: string; icon: React.ReactNode }[];
  image: string | { src: string }; // Allow both string and imported objects
  description: string;
  target: string;
}

export interface Skill {
    id: string | number;
    icon: ReactNode;
    text: string;
    className: string; // usually "skill-icon" or "sec-skill-icon"
}

export interface SkillsConfig {
    mainSkills: Skill[];
    complementarySkills: Skill[];
}

export interface TimelineItem {
  id: string;
  date: string;
  icon: ReactNode;
  title: string;
  company: string;
  description: string;
  tags: string[];
}