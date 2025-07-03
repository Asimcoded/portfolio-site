import { motion } from "framer-motion";
import { Icons } from "../Icons";

export default function About() {
  const skills = [
    { name: "HTML", icon: Icons.html },
    { name: "CSS", icon: Icons.css },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "React", icon: Icons.react },
    { name: "Node.js", icon: Icons.nodejs },
    { name: "Tailwind", icon: Icons.tailwind },
  ];

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen md:min-h-auto text-text-light px-4 py-6  gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
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
          I'm John Doe, a passionate web developer with a knack for creating intuitive and dynamic user experiences. With years of experience in front-end and back-end development, I specialize in building responsive, modern web applications using cutting-edge technologies. My goal is to craft seamless digital solutions that blend functionality with aesthetic appeal.
        </motion.p>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-12 w-12 mb-2"
            />
            <span className="text-sm text-text-light">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}