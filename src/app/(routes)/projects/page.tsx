import ProjectContent from '@/components/projectscontent/ProjectContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul-Rahman Ibrahim | Projects",
  description: "My Portfolio Website",
};

const Projects = () => {
  return (
    <div>
        <ProjectContent />
    </div>
  )
}

export default Projects