import { motion } from "framer-motion";

export default function ProjectCard({ id, project }) {
  return (
    <motion.div
    key={id}
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex md:flex-nowrap flex-wrap gap-5 items-center justify-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.img
          src={project.image}
          alt={project.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <div>
          <motion.h2
            className="text-2xl font-bold text-primary"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {project.name}
          </motion.h2>
          <motion.p
            className="text-text-light"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="flex py-2 gap-5"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Live Demo
              </motion.a>
            )}
            {project.codeUrl && (
              <motion.a
                href={project.codeUrl}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View Code
              </motion.a>
            )}
          </motion.div>
          <motion.h2
            className="text-primary text-lg font-semibold"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            Tech used
          </motion.h2>
          <motion.div
            className="flex flex-wrap py-2 gap-2"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            {project.tech.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center border-primary border-2 rounded-full px-2 py-1 gap-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <span className="text-primary text-xs">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}