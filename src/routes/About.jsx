import { motion } from "framer-motion";
import { Icons } from "../Icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
const skills = [
  { name: "Bootstrap", icon: Icons.technologies.bootstrap },
  { name: "Figma", icon: Icons.technologies.figma },
  { name: "Git", icon: Icons.technologies.git },
  { name: "HTML", icon: Icons.technologies.html },
  { name: "JavaScript", icon: Icons.technologies.js },
  { name: "Node.js", icon: Icons.technologies.node },
  { name: "PhpMyAdmin", icon: Icons.technologies.phpmyadmin },
  { name: "React", icon: Icons.technologies.react },
  { name: "SQLite", icon: Icons.technologies.sqlite },
  { name: "TailwindCSS", icon: Icons.technologies.tailwindcss },
  { name: "CSS", icon: Icons.technologies.css },
];
 const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll Position:", scrollPosition);
      
      if (window.scrollY > 50) { 
        navigate("/project/1");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [navigate]);
  return (
    <motion.div
      className="flex flex-col md:flex-1 md:flex-row items-center justify-center  md:min-h-auto text-text-light px-4 py-6  gap-10 sm:mt-0 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sm:flex-1 text-center md:text-left ">
        <motion.h1
          className="text-4xl font-bold text-primary mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm Asim Das, a passionate web developer with a knack for creating
          intuitive and dynamic user experiences. With years of experience in
          front-end and back-end development, I specialize in building
          responsive, modern web applications using cutting-edge technologies.
          My goal is to craft seamless digital solutions that blend
          functionality with aesthetic appeal.
        </motion.p>
      </div>
      <div className="flex-1 text-center md:text-left ">
        <motion.h1
          className="text-4xl font-semibold text-primary mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          Tech Stack
          </motion.h1>
        <motion.div
          className="flex flex-wrap md:gap-4 gap-2 justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center justify-center border-primary border-2 rounded-full px-4 py-2 gap-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-6 mb-2"
              />
              <span className="text-sm text-primary">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
