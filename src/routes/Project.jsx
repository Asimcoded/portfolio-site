import ProjectBar from "../components/ProjectBar";
import { useParams } from "react-router-dom";
import { Icons } from "../Icons";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";
export default function Project() {
  const { id } = useParams();
  const projects = [
    {
      id: "1",
      name: "Project One",
      image: "https://placehold.co/300",
      description:
        "This is project one. This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.This is project one.",
      tech: [{ name: "React" ,icon : Icons.technologies.react}, { name: "Tailwind CSS", icon: Icons.technologies.tailwindcss }],
      liveUrl: "https://example.com/project1",
      codeUrl: "#",
    },
  {
    id: "2",
    name: "Project Two",
    image: "https://placehold.co/300",
    description:
      "This is project two. A responsive and interactive project built with advanced frontend technologies.",
    tech: [
      { name: "Next.js", icon: Icons.technologies.nextjs },
      { name: "TypeScript", icon: Icons.technologies.typescript },
    ],
    liveUrl: "https://example.com/project2",
    codeUrl: "#",
  },
  {
    id: "3",
    name: "Project Three",
    image: "https://placehold.co/300",
    description:
      "This is project three. A modern single-page application demonstrating clean UI and fast performance.",
    tech: [
      { name: "Vue.js", icon: Icons.technologies.vue },
      { name: "Tailwind CSS", icon: Icons.technologies.tailwindcss },
    ],
    liveUrl: "https://example.com/project3",
    codeUrl: "#",
  },
  {
    id: "4",
    name: "Project Four",
    image: "https://placehold.co/300",
    description:
      "This is project four. A backend-integrated project designed to demonstrate API connectivity and dynamic content.",
    tech: [
      { name: "Node.js", icon: Icons.technologies.nodejs },
      { name: "Express", icon: Icons.technologies.express },
    ],
    liveUrl: "https://example.com/project4",
    codeUrl: "#",
  },
  ];
  return (
    <div className="flex md:flex-1 justify-center items-center text-text-light px-4 py-6 gap-10 sm:mt-0 mt-20">
      <div className="flex-1">
        <motion.h1 className="text-4xl font-bold text-primary mb-8"
          initial={{y:-20, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{delay: 0.2, duration: 0.5}}
        >Projects</motion.h1>
        <ProjectCard id={id} project={projects[id - 1]} />
      </div>
      <ProjectBar />
    </div>
  );
}
