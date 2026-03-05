import SkillsContent from '@/components/skillsContent/SkillsContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul-Rahman Ibrahim | Skills",
  description: "My Portfolio Website",
};

const Skills = () => {
  return (
    <div>
        <SkillsContent />
    </div>
  )
}

export default Skills