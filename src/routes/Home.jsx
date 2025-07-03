import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen md:h-auto text-text-light px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl font-bold text-primary mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hi there,
      </motion.h1>
      <motion.h2
        className="text-5xl  mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm <span className="text-primary font-semibold italic">Asim Das</span>
      </motion.h2>
      <motion.p
        className="text-lg mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Creative Web Developer crafting seamless digital experiences
      </motion.p>
      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/about"
          className="inline-block bg-primary text-background py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Me
        </Link>
        <a
          href="/path-to-cv.pdf"
          download
          className="inline-block bg-transparent border-2 border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
}