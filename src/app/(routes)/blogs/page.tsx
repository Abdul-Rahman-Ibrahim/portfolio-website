import BlogsContent from '@/components/blogsContent/BlogsContent'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul-Rahman Ibrahim | Blogs",
  description: "My Portfolio Website",
};

const Blogs = () => {
  return (
    <div>
        <BlogsContent />
    </div>
  )
}

export default Blogs