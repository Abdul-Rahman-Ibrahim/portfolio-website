import Overview from "@/components/home/Overview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul-Rahman Ibrahim | Home",
  description: "My Portfolio Website",
};

export default function Home() {
  return (
    <div>
      <Overview />
    </div>
  );
}
